import { z } from "zod";

export const climbCenterSectorSettingSchema = z.object({
  id: z.number(),
  sectorId: z.number(),
  settingDate: z.string(),
});

export const climbCenterSectorSchema = z.object({
  id: z.number(),
  name: z.string(),
  climbCenterId: z.number(),
  settingHistory: z.array(climbCenterSectorSettingSchema),
});

export const climbBrandSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const climbingCenterSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  brandId: z.number(),
  instagramUrl: z.string(),
  sectors: z.array(climbCenterSectorSchema),
  brand: climbBrandSchema,
});
