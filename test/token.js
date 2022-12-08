const { expect } = require("chai");

describe("Token Contract", function () {

    it("good", async function () {

        const [owner,add1,add2]=await ethers.getSigners()
        console.log(owner.address)
        console.log(add1.address)
        add2.getBalance().then((data)=>{ console.log(ethers.utils.formatEther(data))})
        const contract=await ethers.getContractFactory('simple')
        const hardhatContract=await contract.deploy()
        const ad=await hardhatContract.interest()
        
        await hardhatContract.connect(owner).pay(add2.address,{value: ethers.utils.parseEther("50")})
        let a;
        add2.getBalance().then((data)=>{ console.log(ethers.utils.formatEther(data))})
        
        // expect(await ethers.utils.formatEther((add1.getBalance()))).to.equal(9950)

    })
})