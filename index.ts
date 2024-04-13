import { events } from "bdsx/event";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { mce } from "bdsx/mce";
import * as fs from "fs";
import * as path from "path";

const filepath = path.resolve(__dirname, './');

const rawData = fs.readFileSync(`${filepath}/contentKey.json`);
const data = JSON.parse(rawData);

function getKeyFromUUID(uuid) {
    return data[uuid] || "";
}

events.packetSend(MinecraftPacketIds.ResourcePacksInfo).on((pkt, ni) => {
    let obj = pkt.data.texturePacks;
    console.log(obj.capacity());
    for (let i = 0; i < obj.capacity(); i++) {
        if (!obj.get(i)) {
            i = obj.capacity();
            continue;
        }
        const uuid = mce.UUID.toString(obj.get(i).contentIdentity.uuid);
        obj.get(i).contentKey = getKeyFromUUID(uuid);
    }
});