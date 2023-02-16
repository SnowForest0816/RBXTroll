<template>
    <div>
        <section id="hero" class="bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxlbmR8ZW58MHx8MHx8&w=1000&q=80')] bg-no-repeat bg-cover h-[100vh] w-full flex justify-center items-center pb-44">
            <div class="max-w-[1500px] text-white flex justify-around gap-x-[30px]">
                <div class="left">
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
                </div>
                <div class="right pt-44">
                    <p class="font-XHarp text-[100px]">RBXTroll</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>
.left, .right {
    display: flex;
    justify-content: center;
    align-items: center;
}
.left {
    width: 45%;
}
.buttons {
    display: flex;
    align-items: center;
    gap: 30px;
}
.buttons > a:first-child {
    color: #fff;
    background: #FF002B;
    outline: 5px solid #ff002b85;
    padding: 12px 35px;
    font-size: 20px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s;
}
.buttons > a:last-child {
    color: #BBBBBB;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: 0.2s;
}
.text {
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.text > h1 {
    font-size: 72px;
    font-weight: 700;
}
.underline {
    text-decoration-color: #FF002B;
    text-underline-offset: 17px;
}
.text > p {
    font-size: 24px;
}
.right > img {
    max-width: 500px;
    border-radius: 4px;
}
.icon {
    height: 62px;
    width: 62px;
    flex-shrink: 0;
    background: #FF002B;
    outline: 6px solid #ff002b85;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title {
    font-weight: 600;
    font-size: 25px;
    color: #fff;
}
.description {
    color: #DFDFDF;
    font-weight: 400;
    font-size: 18px;
}
.feature_box {
    background: #101010;
    border: 1px solid #323232;
    border-radius: 12px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}
.feature_box > hr {
    height: 1px;
    width: 100%;
    border: none;
    background: #1D1D1D;
}
.price {
    background: #101010;
    border: 1px solid #323232;
    border-radius: 12px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    text-align: center;
    gap: 15px;
}
.pricing_feature {
    color: #DFDFDF;
    font-size: 18px;
    border-bottom: 1px solid #1D1D1D;
    text-align: center;
    padding: 12px;
}
.buy {
    color: #fff;
    background: #FF002B;
    outline: 4px solid #ff002b85;
    padding: 10px 35px;
    font-size: 18px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s;
}
</style>