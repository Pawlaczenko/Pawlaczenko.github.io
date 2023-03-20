import { Variants } from "framer-motion";

export const containerStagger : Variants = {
    show: {
        transition:{
        staggerChildren: 0.2
        }
    }
};

export const fadeInDirecion = (dimension: "x" | "y", value: number, duration?: number ) : Variants => {
    return {
        hidden: {
            opacity: 0,
            [dimension]: value
        },
        show: {
            opacity: 1,
            [dimension]: 0,
            transition: {
                ease: "easeInOut",
                duration: duration || 1.6
            }
        }
    }
}