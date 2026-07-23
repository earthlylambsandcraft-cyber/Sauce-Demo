class Screenshot{
    
    constructor(page) {
        
        this.page = page;

    }

    async capture(name) {

        const safeName = name
            .replace(/[<>:"/\\|?*]/g, "_")
            .replace(/\s+/g, "_");


        await this.page.screenshot({
            path:
            `test-results/${name}.png`

        });

    }
}

module.exports = {
    
    Screenshot

}