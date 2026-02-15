import memory1 from '../assets/memory1.jpg';
import memory2 from '../assets/memory2.jpg';
import memory3 from '../assets/memory3.jpg';

export const defaultContent = {
    senderName: "Admirer",
    recipientName: "Beautiful",
    landing: {
        title: "Hey, Beautiful...",
        subtitle: "I built something small.",
        buttonText: "Start ❤️"
    },
    memories: [
        { img: memory1, text: "The day everything changed." },
        { img: memory2, text: "You laughing at nothing." },
        { img: memory3, text: "My favorite human." },
    ],
    question: {
        text: "Will you be my Valentine?",
        yesBtn: "Yes ❤️",
        noBtnMessages: [
            "No 😅",
            "Are you sure?",
            "Think again.",
            "Last chance!",
            "Really?",
            "You can't escape ❤️"
        ]
    },
    final: {
        title: "Yay! ❤️",
        text1: "This isn’t just today.",
        text2: "I choose you.",
        footer: "Screenshot this"
    }
};
