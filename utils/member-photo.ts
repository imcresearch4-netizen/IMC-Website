import { mediaUrl } from "@/lib/media";
import { FEMALE_ICON, MALE_ICON } from "@/constants/paths";
import type { PhotoSource } from "@/types/content";

export const FEMALE_NAME_RE =
  /\b(aisha|ayesha|mehpara|anam|fakhra|minha|aleena|izda|zaara|affia|haleema|zarnab|munazza|zainab|fatima|arandas|esha|mahnoor|saleha|iqra|sara|bisma|mouazma|laiba|madiha|asifa|rehana|ishrat|aimen|tayyaba|roshni|eeman|hira|amna|zoya|sumbul|seerat|kaynat|nosheen|farhat|batool|basir|tanvir|maria|saghir)\b/i;

export function memberPhoto(source: PhotoSource): string {
  if (source.photo) return mediaUrl(source.photo);
  const name = (source.name || "").trim();
  return FEMALE_NAME_RE.test(name) || /a$/i.test(name) ? FEMALE_ICON : MALE_ICON;
}