import "server-only";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";
import { CreatePlayerData } from "@/types/interfaces";

async function fetchPlayers() {
  return prisma.player.findMany({
    include: {
      photo: {
        select: {
          url: true,
          altText: true,
        },
      },
    },
    orderBy: { number: "asc" },
  });
}

export const getPlayers = unstable_cache(fetchPlayers, ["all-players"], {
  revalidate: 3600,
  tags: ["players"],
});

export async function getPlayerById(id: number) {
  return prisma.player.findUnique({
    where: { id },
    include: {
      photo: true,
    },
  });
}

export async function createPlayer(data: CreatePlayerData) {
  return prisma.player.create({
    data: {
      lastName: data.lastName,
      firstName: data.firstName,
      middleName: data.middleName,
      birthDate: data.birthDate,
      number: data.number,
      position: data.position,
      squad: data.squad,
      height: data.height,
      ...(data.photoUrl && {
        photo: {
          create: {
            url: data.photoUrl,
            altText: data.photoAlt || `${data.firstName} ${data.lastName}`,
          },
        },
      }),
    },
  });
}
