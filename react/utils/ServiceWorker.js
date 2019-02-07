class ServiceWorker {
    constructor() {
        this.publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        this.swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    }

    register() {
        console.log('ServiceWorker: register()');
        if (this.shouldRegister()) {
            window.addEventListener("load", () => {
                navigator.serviceWorker
                .register(this.swUrl)
                .catch(error => console.error("SW registration error:", error));
            });
        }
    }

    shouldRegister() {
        console.log('ServiceWorker: shouldregister()');
        return (
            process.env.NODE_ENV === "production" &&
            "serviceWorker" in navigator &&
            this.publicUrl.origin === window.location.origin
        );
    }
}

export default new ServiceWorker();