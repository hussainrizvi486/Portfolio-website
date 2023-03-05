const Animations = {
    leftToRight: {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
            x: 0,
        }
    },

    rightToLeft: {
        initial: {
            opacity: 0,
            x: "100%",
        },
        whileInView: {
            opacity: 1,
            x: 0,
        }
    },

    upToDown: {
        initial: {
            opacity: 0,
            y: "-100%",
        },
        whileInView: {
            opacity: 1,
            y: "0%",

        }
    },

    fadeIn: {
        initial: {
            opacity: 0,

        },
        whileInView: {
            opacity: 1,
        }
    }
};


export default Animations