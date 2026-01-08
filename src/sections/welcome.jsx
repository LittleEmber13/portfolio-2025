import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import header from "../assets/gifs/header.gif";
import linkedin from "../assets/icons/linkedin.png";
import TypingText from "@/components/typing_text";
import { GITHUB_LINK, LINKEDIN_LINK, EMAIL } from '../constants.jsx';
import { useTranslation } from 'react-i18next';

export default function Welcome({ id }) {
    const { t } = useTranslation();
    return (
        <section id={id} className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center gap-8 p-2 lg:pl-24">
                <div>
                    <div className="pb-4 w-full">
                        <TypingText text={t('welcome.greeting')} />
                        <h3>{t('welcome.title')}</h3>
                    </div>
                    <div className="text-start pt-2">
                        <p>
                            {t('welcome.p1')}
                        </p>
                        <br />
                        <p>
                            {t('welcome.p2')}
                        </p>
                    </div>

                </div>
                <img
                    src={header}
                    alt="gif"
                    className="hidden lg:block w-[50%] h-auto shrink-0"
                />
            </div>
            {
                /*
                <div className="flex items-center gap-4 pt-16  w-full">
                    <div className="h-[2px] bg-red-400 flex-1" />
                    <div className="icon-button aspect-square w-[42px] flex items-center justify-center rounded-full">
                        <img src={github} alt={name} className="w-1/2" />
                    </div>
                    <div className="icon-button aspect-square w-[42px] flex items-center justify-center rounded-full">
                        <img src={linkedin} alt={name} className="w-1/2" />
                    </div>
                    <div className="icon-button aspect-square w-[42px] flex items-center justify-center rounded-full">
                        <img src={mail} alt={name} className="w-1/2" />
                    </div>
                    <div className="h-[2px] bg-red-400 flex-1" />
                </div>
                */
            }
            <div className="flex justify-center p-8 pt-16 gap-4">
                <a
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                        <img src={github} alt={name} className="w-1/2 h-auto" />
                    </div>
                </a>
                <a
                    href={LINKEDIN_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                        <img src={linkedin} alt={name} className="w-1/2 h-auto" />
                    </div>
                </a>
                <a
                    href={`mailto:${EMAIL}`}
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                        <img src={mail} alt={name} className="w-1/2 h-auto" />
                    </div>
                </a>
            </div>
        </section>
    );
}