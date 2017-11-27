<template>
    <div class="notice-modal">
		<div class="notice-modal-box d-flex flex-column align-items-center border p-3">
			<div class="notice-modal-title">
				您的彩票游戏钱包余额不足，请转账！
			</div>
			<div class="notice-modal-btn mt-3 d-flex">
				<button class="btn btn-cancel mr-2">取消</button>
				<button class="btn btn-success">确定</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    created(){
        this.$nextTick(function(){
            console.log('cancel')
            $('.btn-cancel').on('click',function(){
                $('.notice-modal-box').addClass('active')
                $('.notice-modal').animate({
                    opacity:0
                },300,function(){
                    $(this).remove()
                })
            })
        })
    }
}
</script>

