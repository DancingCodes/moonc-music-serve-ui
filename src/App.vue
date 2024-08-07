<template>
    <div class="header"> Moonc - Music - Serve - Ui </div>
    <div class="bodyer">
        <div class="searchBox">
            <el-input v-model="musicName" placeholder="请输入音乐名称" maxlength="18" clearable
                @keydown.enter="serachMusicForName">
                <template #append>
                    <el-button @click="serachMusicForName"> <i-ep-search /> </el-button>
                </template>
            </el-input>
        </div>
        <div class="musicList">
            <div class="musicItem" v-for="item in musicList" :key="item.id">
                <div class="musicName">{{ item.name }}</div>
                <div class="musicAuthor">{{ item.author.join('/') }}</div>
                <i-ep-UploadFilled class="saveIcon" @click="saveMusicForId(item.id)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { searchMusic, saveMusic } from "@/api/music";
import { IMusic } from "@/types/music";

const musicName = ref<string>('')

const musicList = ref<IMusic[]>([])

function serachMusicForName() {
    searchMusic({
        name: musicName.value,
        limit: 6
    }).then(res => {
        musicList.value = res.data.list
    })
}

function saveMusicForId(id: number) {
    saveMusic({ id }).then(res => {
        console.log(res.data);
    })
}
</script>

<style scoped lang="scss">
.header {
    font-size: 60px;
    padding: 30px 0;
    text-align: center;
    font-weight: bold;
}

.bodyer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    margin: 0 auto;

    &>div {
        width: 100%;
    }

    :deep(.searchBox) {

        .el-input {
            .el-input__wrapper {
                padding: 0 30px;
                border-radius: 20px 0 0 20px;

                .el-input__inner {
                    height: 80px;
                    font-size: 30px;
                    text-align: center;
                }

                .el-input__suffix {
                    .el-icon {
                        font-size: 34px;
                    }
                }
            }

            .el-input-group__append {
                border-radius: 0 20px 20px 0;

                .el-button {
                    font-size: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    padding: 0 28px;
                }
            }
        }
    }

    .musicList {
        margin-top: 30px;

        .musicItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            border-radius: 20px;

            .musicName {
                font-size: 40px;
                font-weight: bold;
            }

            .musicAuthor {
                font-size: 28px;
            }

            .saveIcon {
                font-size: 40px;
                cursor: pointer;
            }
        }

        .musicItem:hover {
            background-color: #ccc;
        }
    }
}
</style>