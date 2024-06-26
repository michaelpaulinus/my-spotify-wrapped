import UserTopItems from "@/services/UserTopItems";
import type Track from "@/models/Track";

export default async function getTopTracks(
  accessToken: string,
  time: string
): Promise<Track[]> {
  try {
    const res = await UserTopItems.fetchTopTracks(accessToken, time);
    return res.data.items;
  } catch (err) {
    throw err;
  }
}
