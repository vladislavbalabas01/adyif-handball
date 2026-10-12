"use server";

import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { revalidatePath, updateTag } from "next/cache";
import { createPlayer } from "@/services/players.service";

export type ActionState = {
  success: boolean;
  message?: string;
};

export async function addPlayerAction(
  prevState: ActionState | null,
  formData: FormData,
): Promise<ActionState> {
  try {
    // 1. Получаем текстовые данные из формы
    const lastName = formData.get("lastName") as string;
    const firstName = formData.get("firstName") as string;
    const middleName = (formData.get("middleName") as string) || undefined;
    const birthDateStr = formData.get("birthDate") as string;
    const position = formData.get("position") as string;
    const numberStr = formData.get("number") as string;
    const squad = formData.get("squad") as string;
    const heightStr = formData.get("height") as string;
    const photoFile = formData.get("photo") as File | null;

    if (
      !lastName ||
      !firstName ||
      !birthDateStr ||
      !position ||
      !numberStr ||
      !heightStr
    ) {
      return { success: false, message: "Заполните все обязательные поля" };
    }

    // 2. Обработка загрузки фотографии

    let photoUrl: string | undefined = undefined;

    if (photoFile && photoFile.size > 0 && photoFile.name !== "undefined") {
      const bytes = await photoFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Генерируем уникальное имя файла (timestamp + очищенное имя)
      const ext = path.extname(photoFile.name) || ".jpg";
      const cleanFileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
      const squadFolder =
        squad.toLowerCase() === "адыиф-1" ? "adyif-1" : "adyif-2";

      // Путь к папке public/uploads/players
      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        "players",
        squadFolder,
      );

      // Создаем директорию, если она еще не создана
      await mkdir(uploadDir, { recursive: true });

      // Записываем файл на диск
      const filePath = path.join(uploadDir, cleanFileName);
      await writeFile(filePath, buffer);

      // Публичный URL для браузера и Next.js Image
      photoUrl = `/uploads/players/${squadFolder}/${cleanFileName}`;
    }

    // 3. Вызываем сервис для записи в PostgreSQL
    await createPlayer({
      lastName: lastName.trim(),
      firstName: firstName.trim(),
      middleName: middleName?.trim(),
      birthDate: new Date(birthDateStr),
      number: parseInt(numberStr, 10),
      position: position.trim(),
      squad: squad.trim(),
      height: parseInt(heightStr, 10),
      photoUrl,
      photoAlt: `${lastName} ${firstName}`,
    });

    // 4. Сбрасываем кэш, чтобы новые данные сразу появились на сайте
    updateTag("players");
    revalidatePath("/admin/players");

    return { success: true, message: "Игрок успешно добавлен!" };
  } catch (error) {
    console.error("Ошибка при добавлении игрока:", error);
    return { success: false, message: "Не удалось сохранить игрока в базу" };
  }
}
