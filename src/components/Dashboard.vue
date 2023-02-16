<template>
    <!-- <div class="bg-center bg-no-repeat bg-cover bg-[url('https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTM2MTI5NC13aWtpbWVkaWEtaW1hZ2Uta293YjMxMHouanBn.jpg')] h-[100vh]"> -->
    <div class="flex bg-center bg-no-repeat bg-cover bg-[url('https://d3t2bt832dwehx.cloudfront.net/wp-content/uploads/2021/10/slider-01.jpg')] h-[100vh]">
        <div class="pt-44 pl-20">
            <p class="text-4xl text-white font-bold py-3">
                Withdraw
            </p>
            <div class="flex items-center gap-x-10 py-3">
                <button class="bg-[#FF002B] w-48 h-14 text-white px-6 rounded-lg outline outline-4 outline-[#ff002b]/[.85]">
                    Robux Withdrawal
                </button>
                <button class="bg-[#FF002B] w-48 h-14 text-white px-6 rounded-lg outline outline-4 outline-[#ff002b]/[.85]">
                    Bloxflip Tip
                </button>
            </div>
            <div class="flex flex-col pt-5">
                <input class="my-5 py-3 px-5 w-[600px] rounded-lg border-[#328173] bg-[#475c63]" placeholder="Enter you RBLXRoll username..." />
                <input class="my-5 py-3 px-5 w-[600px] rounded-lg border-[#328173] bg-[#475c63]" placeholder="Enter amount you want be tipped..." />
            </div>
            <div class="py-10">
                <button class="w-72 bg-[#FF002B] rounded-lg text-white text-2xl font-bold py-4 outline outline-4 outline-[#ff002b]/[.85]">
                    Withdraw
                </button>
            </div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Robux_2019_Logo_gold.svg/1200px-Robux_2019_Logo_gold.svg.png" alt="" />

    </div>
</template>

<script>
export default {
    name: 'DashboardPage',
}
</script>