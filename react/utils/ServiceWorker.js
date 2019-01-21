class ServiceWorker {
    constructor() {
        this.publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        this.swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    }

    
    register() {
        console.log(this.publicUrl);
    }
}

export default new ServiceWorker();