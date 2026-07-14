class Screenshot{
    
    constructor(page) {
        
        this.page = page;

    }

    async capture(name) {

        await this.page.screenshot({
            path:
            `test-results/${name}.png`

        });

    }
}

module.exports = {
    
    Screenshot

}