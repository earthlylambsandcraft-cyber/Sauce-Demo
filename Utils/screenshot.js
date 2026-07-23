class Screenshot{
    
    constructor(page) {
        
        this.page = page;

    }

    async capture(name) {

        const safeName = name.replace(/[<>:"/\\|?*]/g, "_");

        await this.page.screenshot({
            path:
            `test-results/${name}.png`

        });

    }
}

module.exports = {
    
    Screenshot

}