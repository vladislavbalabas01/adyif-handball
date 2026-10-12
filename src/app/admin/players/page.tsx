"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { addPlayerAction, type ActionState } from "./actions";
import Image from "next/image";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function AdminPlayersPage() {
  const [state, formAction, isPending] = useActionState(
    addPlayerAction,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const POSITIONS = [
    "Вратарь",
    "Левый крайний",
    "Правый крайний",
    "Левый полусредний",
    "Правый полусредний",
    "Центральный",
    "Разыгрывающий",
    "Линейный",
  ] as const;
  const SQUADS = ["Адыиф-1", "Адыиф-2"] as const;
  const inputCls =
    "w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500";

  // Ссылка на превью изображения
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl); // Освобождаем предыдущий URL
      }
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleCancelPhoto = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    // Сбрасываем выбранный файл в самом инпуте формы
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Очищаем форму при успешной отправке
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      handleCancelPhoto(); // Сбрасываем превью изображения после успешной отправки
    }
  }, [state.success]);

  return (
    <main className="mt-6 sm:mt-8 md:mt-32 lg:mt-32 xl:mt-34 2xl:mt-36 mb-8">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">
          Добавить игрока в команду
        </h1>

        {state.message && (
          <div
            className={`p-4 rounded-lg mb-6 text-sm font-medium ${
              state.success
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {state.message}
          </div>
        )}

        <form ref={formRef} action={formAction} className="space-y-4">
          {/* ФИО */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Фамилия <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Иванова"
                className={inputCls}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Имя <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Анна"
                className={inputCls}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Отчество</label>
              <input
                type="text"
                name="middleName"
                placeholder="Сергеевна"
                className={inputCls}
              />
            </div>
          </div>

          {/* Номер, позиция, рост */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Игровой номер <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                name="number"
                required
                min="1"
                max="99"
                placeholder="7"
                className={inputCls}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Амплуа <span className="text-rose-500">*</span>
              </label>
              <select
                name="position"
                required
                defaultValue=""
                className={inputCls}
              >
                <option value="" disabled>
                  Выберите позицию
                </option>
                {POSITIONS.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Рост (см) <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                name="height"
                required
                min="140"
                max="220"
                placeholder="178"
                className={inputCls}
              />
            </div>

            {/* Состав */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Состав <span className="text-rose-500">*</span>
              </label>
              <select
                name="squad"
                required
                defaultValue=""
                className={inputCls}
              >
                <option value="" disabled>
                  Выберите состав
                </option>
                {SQUADS.map((squad) => (
                  <option key={squad} value={squad}>
                    {squad}
                  </option>
                ))}
              </select>
            </div>

            {/* Дата рождения */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Дата рождения <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                name="birthDate"
                required
                className={inputCls}
              />
            </div>
          </div>

          {/* Загрузка фото */}
          <div className="space-y-3">
            <label className="block text-sm font-medium">
              Фотография игрока
            </label>

            {/* 1. Если фото НЕ выбрано: показываем стандартный инпут */}

            <div>
              <input
                ref={fileInputRef}
                type="file"
                name="photo"
                accept="image/png"
                onChange={handlePhotoChange}
                className={`${previewUrl ? "hidden" : ""} w-fit text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 cursor-pointer`}
              />
              <p className="text-xs text-zinc-400 mt-1">Формат: PNG</p>
            </div>

            {/* 2. Если фото ВЫБРАНО: показываем превью карточки и кнопку отмены */}
            {previewUrl && (
              <div className="flex flex-col items-start gap-2">
                <div className="relative inline-block border border-zinc-200 rounded-lg p-2 bg-zinc-50">
                  <div className="relative w-80 h-96 rounded overflow-hidden bg-zinc-200">
                    <Image
                      fill
                      unoptimized
                      src={previewUrl}
                      alt="Предпросмотр"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCancelPhoto}
                  className="mt-2 w-fit text-xs font-semibold py-1.5 px-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
                >
                  Отменить фото
                </button>
              </div>
            )}
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2.5 px-4 rounded-md transition duration-200"
          >
            {isPending ? "Сохранение..." : "Добавить игрока"}
          </button>
        </form>
      </div>
    </main>
  );
}
