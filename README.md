
# Resource Pack Cipher Plugin (English)

 This is a plugin for bdsx to cipher resource packs.

## Usage

1. Please download the files as a zip.
2. Unzip the file.
3. Please add this plugin to your bdsx server.
4. Please execute `npm install` in the terminal.
5. Open `bdsx/bds/packets.ts` and Rewrite the code around lines 90 to 150 as follows.

Original Code:
```ts
// @nativeClass(0x88)
// export class PackIdVersion extends AbstractClass {
//     @nativeField(mce.UUID)
//     uuid:mce.UUID
//     @nativeField(SemVersion, 0x10)
//     version:SemVersion
//     @nativeField(uint8_t)
//     packType:PackType
// }

// @nativeClass(0xA8)
// export class PackInstanceId extends AbstractClass {
//     @nativeField(PackIdVersion)
//     packId:PackIdVersion;
//     @nativeField(CxxString)
//     subpackName:CxxString;
// }

// @nativeClass(0x18)
// export class ContentIdentity extends AbstractClass {
//     @nativeField(mce.UUID)
//     uuid:mce.UUID
//     @nativeField(bool_t, 0x10)
//     valid:bool_t
// }

// @nativeClass(0xF0)
// export class ResourcePackInfoData extends AbstractClass {
//     @nativeField(PackIdVersion)
//     packId:PackIdVersion;
//     @nativeField(bin64_t)
//     packSize:bin64_t;
//     @nativeField(CxxString)
//     contentKey:CxxString;
//     @nativeField(CxxString)
//     subpackName:CxxString;
//     @nativeField(ContentIdentity)
//     contentIdentity:ContentIdentity;
//     @nativeField(bool_t)
//     hasScripts:bool_t;
//     @nativeField(bool_t)
//     hasExceptions:bool_t;
// }

// @nativeClass(null)
// export class ResourcePacksInfoData extends AbstractClass {
//     @nativeField(bool_t)
//     texturePackRequired:bool_t;
//     @nativeField(bool_t)
//     hasScripts:bool_t;
//     @nativeField(bool_t)
//     hasExceptions:bool_t;
//     @nativeField(CxxVector.make(ResourcePackInfoData), 0x08)
//     addOnPacks:CxxVector<ResourcePackInfoData>;
//     @nativeField(CxxVector.make(ResourcePackInfoData), 0x20)
//     texturePacks:CxxVector<ResourcePackInfoData>;
// }

@nativeClass(null)
export class ResourcePacksInfoPacket extends Packet {
    // @nativeField(ResourcePacksInfoData)
    // data:ResourcePacksInfoData;
}
```

Please rewrite as below:
```ts
@nativeClass(0x88)
export class PackIdVersion extends AbstractClass {
    @nativeField(mce.UUID)
    uuid:mce.UUID
    // @nativeField(SemVersion, 0x10)
    // version:SemVersion
    @nativeField(uint8_t)
    packType:PackType
}

// @nativeClass(0xA8)
// export class PackInstanceId extends AbstractClass {
//     @nativeField(PackIdVersion)
//     packId:PackIdVersion;
//     @nativeField(CxxString)
//     subpackName:CxxString;
// }

@nativeClass(0x18)
export class ContentIdentity extends AbstractClass {
    @nativeField(mce.UUID)
    uuid:mce.UUID
    @nativeField(bool_t, 0x10)
    valid:bool_t
}

@nativeClass(0xF0)
export class ResourcePackInfoData extends AbstractClass {
    @nativeField(PackIdVersion)
    packId:PackIdVersion;
    @nativeField(bin64_t)
    packSize:bin64_t;
    @nativeField(CxxString)
    contentKey:CxxString;
    @nativeField(CxxString)
    subpackName:CxxString;
    @nativeField(ContentIdentity)
    contentIdentity:ContentIdentity;
    @nativeField(bool_t)
    hasScripts:bool_t;
    @nativeField(bool_t)
    hasExceptions:bool_t;
}

@nativeClass(null)
export class ResourcePacksInfoData extends AbstractClass {
    @nativeField(bool_t)
    texturePackRequired:bool_t;
    @nativeField(bool_t)
    hasScripts:bool_t;
    @nativeField(bool_t)
    hasExceptions:bool_t;
    @nativeField(CxxVector.make(ResourcePackInfoData), 0x08)
    addOnPacks:CxxVector<ResourcePackInfoData>;
    @nativeField(CxxVector.make(ResourcePackInfoData), 0x20)
    texturePacks:CxxVector<ResourcePackInfoData>;
}

@nativeClass(null)
export class ResourcePacksInfoPacket extends Packet {
    @nativeField(ResourcePacksInfoData)
    data:ResourcePacksInfoData;
}
```
5. Start bdsx.

### Add Encrypted Resource Packs !

1. Please encrypt your resource packs [here](https://tomocraft.github.io/tools/EncryptRP/)
2. Add the encryption resource packs to BDSX as usual.
3. Open contentKey.json in this plugin and edit this file:
```json
{
  "37aa6ac9-f1da-4d9f-b081-ac38ac311076": /* The header uuid of resource pack */
  "zmqD24EehepENgBugP5lJHBe8jM5g1pJ", /* Encryption key */
  "47fbeca6-33f7-6acc-a243-a5de30016798": /* The header uuid of resource pack */
  "sBRRmaG75oRJFqqkKyPRBks9T8UNpHaB", /* Encryption key */
  //...
}
```
4. Please start your server.


## Author
Tomocraft


# リソースパック暗号化プラグイン (Japanese)

 これはリソースパックを暗号化するためのBDSX用のプラグインです。

## 使用方法

1. このリポジトリをZIPファイルとしてダウンロードしてください。
2. ZIPファイルを解凍します。
3. 解凍したものをプラグインフォルダに追加してください。
4. ターミナルで `npm install` というコマンドを実行して下さい。
5. `bdsx/bds/packets.ts` のファイルを開き、大体90行目から150行目にある以下のようなコードを書き換えます。

元のコード:
```ts
// @nativeClass(0x88)
// export class PackIdVersion extends AbstractClass {
//     @nativeField(mce.UUID)
//     uuid:mce.UUID
//     @nativeField(SemVersion, 0x10)
//     version:SemVersion
//     @nativeField(uint8_t)
//     packType:PackType
// }

// @nativeClass(0xA8)
// export class PackInstanceId extends AbstractClass {
//     @nativeField(PackIdVersion)
//     packId:PackIdVersion;
//     @nativeField(CxxString)
//     subpackName:CxxString;
// }

// @nativeClass(0x18)
// export class ContentIdentity extends AbstractClass {
//     @nativeField(mce.UUID)
//     uuid:mce.UUID
//     @nativeField(bool_t, 0x10)
//     valid:bool_t
// }

// @nativeClass(0xF0)
// export class ResourcePackInfoData extends AbstractClass {
//     @nativeField(PackIdVersion)
//     packId:PackIdVersion;
//     @nativeField(bin64_t)
//     packSize:bin64_t;
//     @nativeField(CxxString)
//     contentKey:CxxString;
//     @nativeField(CxxString)
//     subpackName:CxxString;
//     @nativeField(ContentIdentity)
//     contentIdentity:ContentIdentity;
//     @nativeField(bool_t)
//     hasScripts:bool_t;
//     @nativeField(bool_t)
//     hasExceptions:bool_t;
// }

// @nativeClass(null)
// export class ResourcePacksInfoData extends AbstractClass {
//     @nativeField(bool_t)
//     texturePackRequired:bool_t;
//     @nativeField(bool_t)
//     hasScripts:bool_t;
//     @nativeField(bool_t)
//     hasExceptions:bool_t;
//     @nativeField(CxxVector.make(ResourcePackInfoData), 0x08)
//     addOnPacks:CxxVector<ResourcePackInfoData>;
//     @nativeField(CxxVector.make(ResourcePackInfoData), 0x20)
//     texturePacks:CxxVector<ResourcePackInfoData>;
// }

@nativeClass(null)
export class ResourcePacksInfoPacket extends Packet {
    // @nativeField(ResourcePacksInfoData)
    // data:ResourcePacksInfoData;
}
```

以下のように書き換えてください:
```ts
@nativeClass(0x88)
export class PackIdVersion extends AbstractClass {
    @nativeField(mce.UUID)
    uuid:mce.UUID
    // @nativeField(SemVersion, 0x10)
    // version:SemVersion
    @nativeField(uint8_t)
    packType:PackType
}

// @nativeClass(0xA8)
// export class PackInstanceId extends AbstractClass {
//     @nativeField(PackIdVersion)
//     packId:PackIdVersion;
//     @nativeField(CxxString)
//     subpackName:CxxString;
// }

@nativeClass(0x18)
export class ContentIdentity extends AbstractClass {
    @nativeField(mce.UUID)
    uuid:mce.UUID
    @nativeField(bool_t, 0x10)
    valid:bool_t
}

@nativeClass(0xF0)
export class ResourcePackInfoData extends AbstractClass {
    @nativeField(PackIdVersion)
    packId:PackIdVersion;
    @nativeField(bin64_t)
    packSize:bin64_t;
    @nativeField(CxxString)
    contentKey:CxxString;
    @nativeField(CxxString)
    subpackName:CxxString;
    @nativeField(ContentIdentity)
    contentIdentity:ContentIdentity;
    @nativeField(bool_t)
    hasScripts:bool_t;
    @nativeField(bool_t)
    hasExceptions:bool_t;
}

@nativeClass(null)
export class ResourcePacksInfoData extends AbstractClass {
    @nativeField(bool_t)
    texturePackRequired:bool_t;
    @nativeField(bool_t)
    hasScripts:bool_t;
    @nativeField(bool_t)
    hasExceptions:bool_t;
    @nativeField(CxxVector.make(ResourcePackInfoData), 0x08)
    addOnPacks:CxxVector<ResourcePackInfoData>;
    @nativeField(CxxVector.make(ResourcePackInfoData), 0x20)
    texturePacks:CxxVector<ResourcePackInfoData>;
}

@nativeClass(null)
export class ResourcePacksInfoPacket extends Packet {
    @nativeField(ResourcePacksInfoData)
    data:ResourcePacksInfoData;
}
```
5. BDSXを起動します。

### 暗号化されたリソースパックの暗号化方法

1. [ここ](https://tomocraft.github.io/tools/EncryptRP/)でリソースパックを暗号化してください。
2. 暗号化されたリソースパックを通常通りに配置してください。
3. このプラグインの `contentKey.json` を編集します 例:
```json
{
  "37aa6ac9-f1da-4d9f-b081-ac38ac311076": /* リソースパックの header uuid */
  "zmqD24EehepENgBugP5lJHBe8jM5g1pJ", /* 暗号化キー */
  "47fbeca6-33f7-6acc-a243-a5de30016798": /* リソースパックの header uuid */
  "sBRRmaG75oRJFqqkKyPRBks9T8UNpHaB", /* 暗号化キー */
  //...
}
```
4. サーバーを起動します。


## 著者
Tomocraft

