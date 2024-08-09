<template>
    <div class="home">
        <div class="header"> Moonc - Music - Serve - Ui </div>
        <div class="bodyer" :class="{ searchBodyer: searched }">
            <div class="searchBox">
                <el-input v-model="musicName" placeholder="请输入音乐名称" maxlength="18" @keydown.enter="serachMusicForName">
                    <template #append>
                        <el-button :loading="searchLoading" @click="serachMusicForName">
                            <i-ep-search v-show="!searchLoading" />
                        </el-button>
                    </template>
                </el-input>
            </div>


            <el-scrollbar class="musicList" v-loading="searchLoading">
                <div class="musicItem" v-for="item in musicList" :key="item.id">
                    <div class="musicInfo">
                        <span class="musicName">
                            {{ item.name }}
                        </span>
                        <span class="musicAuthor">
                            ({{ item.author.join('/') }})
                        </span>
                    </div>

                    <el-button link :loading="item.loading" @click="saveMusicForMusic(item)">
                        <i-ep-UploadFilled v-if="!item.loading" />
                    </el-button>
                </div>
            </el-scrollbar>
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
        limit: 10
    }).then(res => {
        musicList.value = res.data.list
    }).finally(() => {
        searchLoading.value = false
    })
}

function saveMusicForMusic(music: IMusic) {
    music.loading = true
    saveMusic({ id: music.id }).then(() => {
        ElNotification({
            title: 'success',
            message: '已上传',
            type: 'success',
        })
    }).finally(() => {
        music.loading = false
    })
}
</script>

<style scoped lang="scss">
.home {
    height: 100vh;
    display: flex;
    flex-direction: column;


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
        flex: 1;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 240px;
        transition: all 0.5s;


        :deep(.searchBox) {
            width: 1200px;
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

        :deep(.musicList) {
            width: 1400px;
            flex: 1;
            margin-top: 30px;
            padding-bottom: 30px;
            padding-right: 10px;
            box-sizing: border-box;

            .musicItem {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 20px;
                padding: 0 10px;

                .musicInfo {
                    display: flex;
                    align-items: center;
                    column-gap: 20px;
                    flex: 1;

                    .musicName {
                        font-size: 46px;
                        font-weight: bold;
                    }

                    .musicAuthor {
                        font-size: 40px;
                    }
                }

                .el-button {
                    font-size: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }
            }

            .musicItem:not(:first-child) {
                margin-top: 30px;
            }

            .musicItem:hover {
                background-color: hotpink;
                color: #fff;
            }

            .el-loading-mask {
                .circular {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }

    .searchBodyer {
        padding-top: 0px;

        :deep(.searchBox) {
            width: 1400px;

            .el-input {
                .el-input__wrapper {
                    padding: 0 30px;
                    border-radius: 20px 0 0 20px;

                    .el-input__inner {
                        height: 80px;
                        font-size: 36px;
                        text-align: center;
                    }
                }

                .el-input-group__append {
                    border-radius: 0 20px 20px 0;

                    .el-button {
                        font-size: 36px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        padding: 0 36px;
                    }
                }
            }
        }
    }
}
</style>