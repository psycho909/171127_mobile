<template>
    <section class="play-box fixed-bottom">
        <!-- 下注块 -->
        <div class="container-fluid">
            <div class="row py-2">
                <div class="col-12 d-flex">
                    <div class="d-flex flex-column mr-5">
                        <div class="select-num text-white mb-2">已选中
                            <span class="bet-num">0</span> 注</div>
                        <input type="number" class="form-control" placeholder="输入金额">
                    </div>
                    <button id="beishu" class="play-btn btn btn-play mr-3">下注</button>
                    <button class="play-btn btn btn-reset">重置</button>
                </div>
            </div>
            <div class="row py-2 close-pen w-100 h-100 d-none">
                <div class="col-12 text-white close-pen-title text-center">已封盘</div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  
}
</script>
