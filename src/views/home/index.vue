<template>
    <div class="home">
        <div class="header"> Moonc - Music - Serve - Ui </div>
        <div class="bodyer">
            <div class="searchBox" :class="{ searched: searched }">
                <el-input v-model="musicName" placeholder="请输入音乐名称" maxlength="18" @keydown.enter="serachMusicForName">
                    <template #append>
                        <el-button :loading="searchLoading" @click="serachMusicForName">
                            <i-ep-search v-show="!searchLoading" />
                        </el-button>
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
    </div>
</template>

<script setup lang="ts">
import { searchMusic, saveMusic } from "@/api/music";
import { IMusic } from "@/types/music";

const searched = ref<boolean>(false)

const musicName = ref<string>('')
const searchLoading = ref<boolean>(false)

const musicList = ref<IMusic[]>([])

function serachMusicForName() {
    if (!searched.value) {
        searched.value = true
    }

    searchLoading.value = true
    searchMusic({
        name: musicName.value,
        limit: 6
    }).then(res => {
        musicList.value = res.data.list
    }).finally(() => {
        searchLoading.value = false
    })
}

function saveMusicForId(id: number) {
    saveMusic({ id }).then(() => {
        ElNotification({
            title: 'success',
            message: '已上传',
            type: 'success',
        })
    })
}
</script>

<style scoped lang="scss">
.home {
    .header {
        font-size: 60px;
        padding: 30px 0;
        text-align: center;
        font-weight: bold;
        animation: opacityShow 1s ease 0s forwards;
    }

    @keyframes opacityShow {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .bodyer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;


        .searched {
            transition: margin-top 0.5s;
            margin-top: 20px !important;
        }

        :deep(.searchBox) {
            width: 1200px;
            margin-top: 240px;
            animation: translateXShow 1s ease 0s forwards;

            .el-input {
                .el-input__wrapper {
                    padding: 0 30px;
                    border-radius: 20px 0 0 20px;

                    .el-input__inner {
                        height: 100px;
                        font-size: 36px;
                        text-align: center;
                    }

                    .el-input__suffix {
                        .el-icon {
                            font-size: 50px;
                        }
                    }
                }

                .el-input-group__append {
                    border-radius: 0 20px 20px 0;

                    .el-button {
                        font-size: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        padding: 0 36px;
                    }
                }
            }
        }

        @keyframes translateXShow {
            from {
                transform: translateX(-100%);
            }

            to {
                transform: translateX(0);
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
}
</style>