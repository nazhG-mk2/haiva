import Banner from "./banner";

const About = () => {
    return (
        <main className="flex flex-col">
            <Banner />
            <br />
            <section className="flex flex-col items-center">
                <div className="px-12 md:px-6 text-center">
                    <h2 className="font-semibold text-5xl md:text-xl mb-2 mt-12">Welcome to haiva Project</h2>
                    <p className="text-dark text-sm mb-12">Enhancing human connection and therapeutic outcomes through advanced AI</p>
                    <p className="mb-8">haiva is an open-source, microservices-oriented platform designed to empower mental health professionals with AI-driven tools and decentralized data model.</p>
                    <p className="mb-14">It streamlines workflows, provides deeper patient insights, and enables personalized treatment plans.</p>
                    <div className="flex justify-evenly mb-14">
                        <button className="bg-black text-white btn md:px-4">Get Involved</button>
                        <button className="bg-black text-white btn md:px-4">Explore Haiva</button>
                    </div>
                </div>
                <div className="px-12 md:px-6">
                    <hr className="border-t-[1px] border-black opacity-90 mb-10" />
                    <h2 className="font-semibold text-5xl mb-10">Mission</h2>

                    <p className="mb-8">The haiva project is on a <b>mission</b> to cultivate a world where mental health is prioritized, accessible, and understood by empowering practitioners with AI-driven tools that deepen human connection and enhance therapeutic outcomes.</p>
                    <p className="mb-8">The haiva project <b>envisions</b> a future where technology seamlessly integrates with human empathy, enabling personalized mental health care that is both effective and compassionate.</p>
                    <p className="mb-14">With a <b>commitment to innovation, privacy, and security</b>, haiva is poised to become a leader in the mental health technology space, helping practitioners worldwide improve patient outcomes while staying compliant with global regulations.</p>
                </div>
                <div className="flex w-full bg-black">
                    <img className="w-1/3 md:w-2/5 object-cover" src="./about_2.webp" alt="" />
                    <div className="flex flex-col pl-10 pr-[20%] md:pr-6 pt-10 pb-8 md:py-5 md:pl-3 w-2/3 justify-between">
                        <span className="text-2xl md:text-lg sm:text-base text-white mb-6">Mental Health Platform AI-Driven, Decentralized, Collaborative</span>
                        <span className="text-sm text-light cursor-pointer">Get Involved</span>
                    </div>
                </div>
                <div className="px-20 md:px-8 py-10">
                    <h2 className="tittle mb-8 text-center">Core Principles of haiva</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-lg">Decentralization</h3>
                            <p>All patient data is decentralized, meaning it is never stored on haiva’s servers. Instead, the data is either stored locally on the practitioner's device or with an accredited government or association-based storage solution.<br />This ensures maximum privacy and data control for practitioners and institutions.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-lg">AI-Powered Insights</h3>
                            <p>haiva leverages state-of-the-art AI to assist mental health practitioners with real-time emotional analysis, session summaries, and automation of routine tasks. This reduces the administrative burden on practitioners and enhances the precision and quality of care.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-lg">Modularity & Flexibility</h3>
                            <p>The platform is built on a modular architecture, with each feature and service functioning as an independent microservice. This modularity allows for easy customization, enabling users to build their ideal mental health platform by selecting only the services they need.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-lg">Open-Source & Collaborative</h3>
                            <p>haiva is open-source, encouraging global collaboration and continuous innovation. Practitioners, developers and researchers are invited to contribute to haiva's evolution, ensuring that the platform stays at the cutting edge of mental health technology.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f4f4] px-28 lg:px-16 md:px-12 py-8 text-center">
                    <h2 className="tittle mb-14">Key Features and Capabilities</h2>
                    <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 mb-12">
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5833 0H10.4167C7.65501 0.00330804 5.00741 1.10184 3.05462 3.05462C1.10184 5.00741 0.00330804 7.65501 0 10.4167L0 39.5833C0.00330804 42.345 1.10184 44.9926 3.05462 46.9454C5.00741 48.8982 7.65501 49.9967 10.4167 50H39.5833C42.345 49.9967 44.9926 48.8982 46.9454 46.9454C48.8982 44.9926 49.9967 42.345 50 39.5833V10.4167C49.9967 7.65501 48.8982 5.00741 46.9454 3.05462C44.9926 1.10184 42.345 0.00330804 39.5833 0V0ZM35.4167 20.8333C34.8641 20.8333 34.3342 20.6138 33.9435 20.2231C33.5528 19.8324 33.3333 19.3025 33.3333 18.75C33.3333 18.1975 33.1138 17.6676 32.7231 17.2769C32.3324 16.8862 31.8025 16.6667 31.25 16.6667H27.0833V33.3333H29.1667C29.7192 33.3333 30.2491 33.5528 30.6398 33.9435C31.0305 34.3342 31.25 34.8641 31.25 35.4167C31.25 35.9692 31.0305 36.4991 30.6398 36.8898C30.2491 37.2805 29.7192 37.5 29.1667 37.5H20.8333C20.2808 37.5 19.7509 37.2805 19.3602 36.8898C18.9695 36.4991 18.75 35.9692 18.75 35.4167C18.75 34.8641 18.9695 34.3342 19.3602 33.9435C19.7509 33.5528 20.2808 33.3333 20.8333 33.3333H22.9167V16.6667H18.75C18.1975 16.6667 17.6676 16.8862 17.2769 17.2769C16.8862 17.6676 16.6667 18.1975 16.6667 18.75C16.6667 19.3025 16.4472 19.8324 16.0565 20.2231C15.6658 20.6138 15.1359 20.8333 14.5833 20.8333C14.0308 20.8333 13.5009 20.6138 13.1102 20.2231C12.7195 19.8324 12.5 19.3025 12.5 18.75C12.5 17.0924 13.1585 15.5027 14.3306 14.3306C15.5027 13.1585 17.0924 12.5 18.75 12.5H31.25C32.9076 12.5 34.4973 13.1585 35.6694 14.3306C36.8415 15.5027 37.5 17.0924 37.5 18.75C37.5 19.3025 37.2805 19.8324 36.8898 20.2231C36.4991 20.6138 35.9692 20.8333 35.4167 20.8333Z" fill="#374957" />
                            </svg>
                            <p className="font-semibold h-10 my-4">Automated Transcription with Contextual Understanding</p>
                            <p className="text-sm">
                                <b>Utilizes</b> advanced Automated Speech
                                Recognition (ASR) technology to accurately transcribe therapy
                                sessions in real-time.
                                <br />
                                <br />
                                <b>Captures</b> the nuances of therapeutic
                                conversations, preserving context
                                and meaning.
                                <br />
                                <br />
                                <b>Frees</b> up practitioners from manual
                                note-taking, allowing them to focus
                                on their patients.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.3333 0H10.6667C7.90501 0.00330804 5.25741 1.10184 3.30462 3.05462C1.35184 5.00741 0.253308 7.65501 0.25 10.4167V39.5833C0.253308 42.345 1.35184 44.9926 3.30462 46.9454C5.25741 48.8982 7.90501 49.9967 10.6667 50H27.3333C30.095 49.9967 32.7426 48.8982 34.6954 46.9454C36.6482 44.9926 37.7467 42.345 37.75 39.5833V10.4167C37.7467 7.65501 36.6482 5.00741 34.6954 3.05462C32.7426 1.10184 30.095 0.00330804 27.3333 0V0ZM19 9.375C19.6181 9.375 20.2223 9.55828 20.7362 9.90166C21.2501 10.245 21.6506 10.7331 21.8871 11.3041C22.1236 11.8751 22.1855 12.5035 22.065 13.1097C21.9444 13.7158 21.6467 14.2727 21.2097 14.7097C20.7727 15.1467 20.2158 15.4444 19.6097 15.565C19.0035 15.6855 18.3751 15.6236 17.8041 15.3871C17.2331 15.1506 16.745 14.7501 16.4017 14.2362C16.0583 13.7223 15.875 13.1181 15.875 12.5C15.875 11.6712 16.2042 10.8763 16.7903 10.2903C17.3763 9.70424 18.1712 9.375 19 9.375ZM19 41.6667C16.9398 41.6667 14.9258 41.0557 13.2128 39.9111C11.4998 38.7665 10.1647 37.1397 9.37626 35.2363C8.58784 33.3329 8.38156 31.2384 8.78349 29.2178C9.18542 27.1972 10.1775 25.3411 11.6343 23.8843C13.0911 22.4275 14.9472 21.4354 16.9678 21.0335C18.9884 20.6316 21.0829 20.8378 22.9863 21.6263C24.8897 22.4147 26.5165 23.7498 27.6611 25.4628C28.8057 27.1758 29.4167 29.1898 29.4167 31.25C29.4134 34.0117 28.3148 36.6593 26.362 38.612C24.4093 40.5648 21.7617 41.6634 19 41.6667Z" fill="#374957" />
                            </svg>
                            <p className="font-semibold h-10 my-4">Acoustic & Emotional Analysis</p>
                            <p className="text-sm">
                                <b>Employs</b> sophisticated voice analysis algorithms to detect subtle emotional cues in patients' voices.
                                <br />
                                <br />
                                <b>Provides</b> insights into patients' emotional states, even when masked by words.
                                <br />
                                <br />
                                <b>Enables</b> a deeper understanding of patients' needs and facilitates more targeted interventions.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_176_299)">
                                    <path d="M25.6255 21.2041C25.8416 21.6887 26.0944 22.156 26.3818 22.602L49.0109 18.0999C48.0886 14.8587 46.5184 11.8382 44.3954 9.22116C42.2724 6.60408 39.6407 4.44476 36.6594 2.87378C33.6781 1.30279 30.4092 0.352781 27.0502 0.0811899C23.6913 -0.190401 20.3122 0.222071 17.1172 1.29366L25.6255 21.2041Z" fill="#374957" />
                                    <path d="M26.3145 28.6292C24.3413 27.1194 22.7859 25.1309 21.7958 22.8521L13.2854 2.9292C10.0574 4.6344 7.24233 7.02638 5.0384 9.93678C2.83448 12.8472 1.29522 16.2053 0.52898 19.7746C-0.237261 23.344 -0.211862 27.038 0.603387 30.5965C1.41864 34.1551 3.00392 37.4916 5.24766 40.3715C7.4914 43.2513 10.3391 45.6043 13.5902 47.265C16.8414 48.9256 20.417 49.8535 24.0654 49.9834C27.7138 50.1132 31.3463 49.4418 34.7073 48.0164C38.0682 46.5911 41.0759 44.4464 43.5187 41.7334L26.3145 28.6292Z" fill="#374957" />
                                    <path d="M29.9275 26.1436L46.0546 38.4353C48.6318 34.4282 50.0016 29.7642 50.0004 24.9999C49.9969 24.0593 49.9405 23.1196 49.8316 22.1853L29.9275 26.1436Z" fill="#374957" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_176_299">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-semibold h-10 my-4">Predictive Analytics & Real-Time Insights</p>
                            <p className="text-sm">
                                <b>Leverages</b> machine learning to analyze patient data and provide real-time insights during therapy sessions.
                                <br />
                                <br />
                                <b>Suggests</b> potential therapeutic approaches, identifies emerging issues, and predicts patient outcomes.
                                <br />
                                <br />
                                <b>Empowers</b> practitioners to make data-driven decisions and personalize treatment plans.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_177_194)">
                                    <path d="M38.9859 25H29.1672C26.866 25 25.0005 23.1345 25.0005 20.8333V10.9875C25.0063 9.0451 24.1085 7.21034 22.5713 6.02294C21.1147 4.86942 19.2047 4.45829 17.4025 4.91044C5.15353 7.95106 -2.31141 20.3459 0.729309 32.595C2.87159 41.2251 9.8255 47.8289 18.5547 49.5229C30.4795 51.8055 42.115 44.3914 45.0839 32.6187C45.5377 30.8142 45.1274 28.9014 43.9734 27.4417C42.7724 25.9072 40.9346 25.0074 38.9859 25Z" fill="#374957" />
                                    <path d="M49.2726 15.5127C48.797 13.745 48.0887 12.0482 47.1663 10.4669C44.3919 5.70737 39.8599 2.2272 34.5455 0.775244C34.1954 0.680811 33.4121 0.625244 33.4121 0.625244C33.1322 0.625342 31.9268 0.625244 30.9726 1.39819C29.5701 2.50181 29.3496 3.75649 29.3288 3.85444C29.2561 4.16167 29.2183 4.47622 29.2163 4.79194V14.5836C29.2163 18.0354 32.0146 20.8336 35.4663 20.8336H45.2976C46.6019 20.8374 47.8295 20.2181 48.6018 19.1669C49.1729 18.3969 49.4666 17.4563 49.4351 16.4982C49.4185 16.1646 49.364 15.8339 49.2726 15.5127Z" fill="#374957" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_177_194">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className="font-semibold h-10 my-4">Dynamic Knowledge Graph Integration</p>
                            <p className="text-sm">
                                <b>Incorporates</b> a knowledge graph that integrates the latest research, treatment methodologies, and patient outcomes.
                                <br />
                                <br />
                                <b>Provides</b> practitioners with up-todate information and evidencebased recommendations.
                                <br />
                                <br />
                                <b>Continuously evolves</b> and incorporates new data to ensure that Haiva remains at the forefront of mental health care.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34754 37.5C5.07079 40.4908 8.89237 41.5184 11.8832 39.7951C11.8852 39.7939 11.8872 39.7928 11.8892 39.7916L12.8163 39.2562C14.5663 40.7534 16.5778 41.9146 18.7496 42.6812V43.75C18.7496 47.2018 21.5478 50 24.9996 50C28.4514 50 31.2496 47.2018 31.2496 43.75V42.6813C33.4217 41.9134 35.4333 40.7509 37.1829 39.2521L38.1141 39.7896C41.1056 41.5154 44.93 40.4895 46.6558 37.4979C48.3817 34.5063 47.3557 30.682 44.3641 28.9562L43.4391 28.4228C43.8556 26.1571 43.8556 23.8345 43.4391 21.5687L44.3641 21.0354C47.3556 19.3095 48.3817 15.4853 46.6558 12.4937C44.93 9.50215 41.1057 8.47607 38.1141 10.202L37.1871 10.7374C35.4353 9.24199 33.4224 8.08301 31.2496 7.31875V6.25C31.2496 2.79824 28.4514 0 24.9996 0C21.5478 0 18.7496 2.79824 18.7496 6.25V7.31875C16.5775 8.08662 14.5659 9.24912 12.8163 10.7479L11.885 10.2084C8.89344 8.48242 5.06922 9.5085 3.34334 12.5C1.61746 15.4915 2.64344 19.3158 5.63504 21.0417L6.56004 21.575C6.14364 23.8407 6.14364 26.1634 6.56004 28.4292L5.63504 28.9625C2.65174 30.693 1.62909 34.5098 3.34754 37.5ZM24.9996 16.6667C29.6019 16.6667 33.3329 20.3977 33.3329 25C33.3329 29.6023 29.6019 33.3333 24.9996 33.3333C20.3972 33.3333 16.6663 29.6023 16.6663 25C16.6663 20.3977 20.3972 16.6667 24.9996 16.6667Z" fill="#374957" />
                            </svg>
                            <p className="font-semibold h-10 my-4">Personalized & Adaptive Therapeutic Tools</p>
                            <p className="text-sm">
                                <b>Offers</b> a range of customizable tools that can be tailored to the specific needs of practitioners and patients.
                                <br />
                                <br />
                                <b>Provides</b> personalized treatment plans, session note templates, and smart scheduling features.
                                <br />
                                <br />
                                <b>Adapts</b> to user preferences and learns from interactions to enhance
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_177_208)">
                                    <path d="M25 20.8333C19.319 20.9483 13.677 19.8717 8.4375 17.6729C9.41667 0.25 18.3479 0 18.75 0C19.0625 0 21.7417 0.208333 25 5.23542C28.1521 0.266667 30.9375 0 31.25 0C31.6521 0 40.5854 0.25 41.5625 17.6729C36.3231 19.8719 30.681 20.9485 25 20.8333ZM45.9979 20.1375C39.5342 23.5397 32.3013 25.2147 25 25C17.6986 25.2157 10.4654 23.5407 4.00208 20.1375C1.3625 21.4583 0 23.0729 0 25C0 31.5771 15.7146 33.3333 25 33.3333C34.2854 33.3333 50 31.5771 50 25C50 23.0729 48.6375 21.4583 45.9979 20.1375ZM34.375 35.4167C32.9292 35.4184 31.5165 35.8498 30.3164 36.6563C29.1164 37.4628 28.1832 38.6078 27.6354 39.9458C25.9117 39.4625 24.0883 39.4625 22.3646 39.9458C21.6995 38.3334 20.4775 37.0134 18.9211 36.2261C17.3647 35.4387 15.5774 35.2365 13.8844 35.656C12.1914 36.0756 10.7053 37.0891 9.69671 38.5121C8.68808 39.9351 8.22395 41.673 8.38879 43.4094C8.55364 45.1458 9.33649 46.7653 10.5949 47.9731C11.8532 49.1809 13.5035 49.8967 15.2452 49.9902C16.9869 50.0837 18.7042 49.5487 20.0847 48.4825C21.4651 47.4164 22.4169 45.89 22.7667 44.1813C23.4842 43.9222 24.2377 43.7767 25 43.75C25.7624 43.7765 26.5159 43.922 27.2333 44.1813C27.5119 45.5319 28.1678 46.7758 29.1248 47.7687C30.0819 48.7616 31.3008 49.4627 32.6403 49.7907C33.9798 50.1187 35.3848 50.0602 36.6923 49.6219C37.9999 49.1835 39.1563 48.3834 40.0274 47.3143C40.8985 46.2453 41.4486 44.9511 41.6138 43.582C41.7791 42.2129 41.5526 40.825 40.9609 39.5793C40.3691 38.3337 39.4362 37.2815 38.2705 36.5447C37.1048 35.8079 35.754 35.4167 34.375 35.4167Z" fill="#374957" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_177_208">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-semibold h-10 my-4">Data Privacy & Security</p>
                            <p className="text-sm">
                                <b>Prioritizes</b>  data privacy and security, complying with global regulations like GDPR, HIPAA, and the EU AI Act.
                                <br />
                                <br />
                                <b>Employs</b> advanced encryption and security protocols to protect patient data.
                                <br />
                                <br />
                                <b>Ensures</b> that all information is handled with the utmost care and confidentiality.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_178_254)">
                                    <path d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.9603 3.79521 10.8648 1.90302 15.4329C0.0108322 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1814 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1228 49.5196C24.9723 50.4843 29.9989 49.9892 34.5671 48.097C39.1353 46.2048 43.0397 43.0005 45.7867 38.8893C48.5338 34.778 50 29.9445 50 25C49.9928 18.3718 47.3566 12.0171 42.6698 7.33025C37.9829 2.64339 31.6282 0.00716892 25 0V0ZM43.0354 14.5833H36.3146C34.8084 11.0906 32.8234 7.82457 30.4167 4.87917C35.7374 6.32452 40.2724 9.81205 43.0354 14.5833ZM34.375 25C34.36 27.1208 34.0278 29.2275 33.3896 31.25H16.6104C15.9722 29.2275 15.64 27.1208 15.625 25C15.64 22.8792 15.9722 20.7726 16.6104 18.75H33.3896C34.0278 20.7726 34.36 22.8792 34.375 25ZM18.2792 35.4167H31.7208C29.9513 38.9091 27.6878 42.1283 25 44.975C22.3122 42.1283 20.0487 38.9091 18.2792 35.4167ZM18.2792 14.5833C20.0487 11.0909 22.3122 7.87175 25 5.025C27.6878 7.87175 29.9513 11.0909 31.7208 14.5833H18.2792ZM19.5833 4.87917C17.1772 7.82496 15.1922 11.0909 13.6854 14.5833H6.96459C9.72761 9.81205 14.2626 6.32452 19.5833 4.87917ZM5.12501 18.75H12.275C11.1862 22.8455 11.1862 27.1545 12.275 31.25H5.12501C3.84729 27.1813 3.84729 22.8187 5.12501 18.75ZM6.96459 35.4167H13.6854C15.1916 38.9094 17.1766 42.1754 19.5833 45.1208C14.2626 43.6755 9.72761 40.188 6.96459 35.4167ZM30.4167 45.1208C32.8228 42.175 34.8078 38.9091 36.3146 35.4167H43.0354C40.2724 40.188 35.7374 43.6755 30.4167 45.1208ZM44.875 31.25H37.725C38.8139 27.1545 38.8139 22.8455 37.725 18.75H44.875C46.1527 22.8187 46.1527 27.1813 44.875 31.25Z" fill="#374957" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_178_254">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-semibold h-10 my-4">Multi-Language Support & Accessibility</p>
                            <p className="text-sm">
                                <b>Offers</b>multi-language support, making it accessible to practitioners and patients worldwide.
                                <br />
                                <br />
                                <b>Adheres</b> to accessibility guidelines, ensuring that the platform is usable by everyone, regardless of language or ability.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_178_249)">
                                    <path d="M43.75 0H6.25C4.5924 0 3.00268 0.65848 1.83058 1.83058C0.65848 3.00268 0 4.5924 0 6.25L0 41.6667H14.375L22.3083 48.3708C23.0604 49.0064 24.0132 49.3552 24.9979 49.3552C25.9826 49.3552 26.9354 49.0064 27.6875 48.3708L35.625 41.6667H50V6.25C50 4.5924 49.3415 3.00268 48.1694 1.83058C46.9973 0.65848 45.4076 0 43.75 0V0ZM12.5 10.4167H25V14.5833H12.5V10.4167ZM37.5 31.25H12.5V27.0833H37.5V31.25ZM37.5 22.9167H12.5V18.75H37.5V22.9167Z" fill="#374957" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_178_249">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-semibold h-10 my-4">Seamless Workflow Integration</p>
                            <p className="text-sm">
                                <b>Integrates</b> effortlessly with existing Electronic Health Record (EHR) systems, streamlining workflows and reducing administrative burden.
                                <br />
                                <br />
                                <b>Facilitates</b> secure data exchange and ensures compatibility with various healthcare platforms.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_177_242)">
                                    <path d="M25 0C18.8509 0.0108324 12.92 2.27943 8.33333 6.375V0H4.16667V10.7146C4.16777 11.7403 4.57572 12.7237 5.30102 13.449C6.02631 14.1743 7.0097 14.5822 8.03542 14.5833H18.75V10.4167H10.125C13.5059 6.96891 17.9794 4.80264 22.7807 4.28825C27.582 3.77385 32.4129 4.94329 36.4474 7.5966C40.4819 10.2499 43.4695 14.2223 44.8992 18.8346C46.3289 23.4468 46.1121 28.4126 44.2857 32.8826C42.4594 37.3527 39.137 41.0496 34.8865 43.3411C30.6361 45.6326 25.7216 46.3765 20.9834 45.4455C16.2452 44.5146 11.9776 41.9666 8.91012 38.2372C5.84268 34.5079 4.16596 29.8288 4.16667 25H0C0 29.9445 1.46622 34.778 4.21326 38.8893C6.9603 43.0005 10.8648 46.2048 15.4329 48.097C20.0011 49.9892 25.0277 50.4843 29.8773 49.5196C34.7268 48.555 39.1814 46.174 42.6777 42.6777C46.174 39.1814 48.555 34.7268 49.5196 29.8773C50.4843 25.0277 49.9892 20.0011 48.097 15.4329C46.2048 10.8648 43.0005 6.9603 38.8893 4.21326C34.778 1.46622 29.9445 0 25 0V0Z" fill="#374957" />
                                    <path d="M22.917 14.582V25.8612L29.7774 32.7216L32.7232 29.7758L27.0836 24.1362V14.582H22.917Z" fill="#374957" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_177_242">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-semibold h-10 my-4">Seamless Workflow Integration</p>
                            <p className="text-sm">
                                <b>Built</b> on a scalable architecture that can adapt to the needs of growing practices and institutions.
                                <br />
                                <br />
                                <b>Regularly updated</b> with new features and improvements to ensure that Haiva remains at the forefront of mental health technology.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full bg-black">
                    <div className="flex flex-col pl-10 pr-[20%] md:pr-6 pt-10 pb-8 md:py-5 md:pl-3 w-2/3 justify-between">
                        <span className="text-2xl md:text-lg sm:text-base text-white mb-6">The haiva platform represents a major step forward in the delivery of mental health care.</span>
                        <span className="text-sm text-light cursor-pointer">Get Involved</span>
                    </div>
                    <img className="w-1/3 md:w-2/5 object-cover -scale-x-100" src="./about_3.webp" alt="" />
                </div>
                <div className="pt-14 px-20 md:px-8">
                    <h2 className="tittle mb-12 text-center">Platform</h2>
                    <p className="">
                        <span className="text-dark font-semibold">Combining AI-powered automation</span> with a
                        decentralized data model, haiva ensures that
                        practitioners and institutions can deliver better care
                        while maintaining full control over sensitive patient
                        information.
                        <br /><br />
                        <span className="text-dark font-semibold">haiva’s open-source</span>, modular microservicesoriented
                        architecture provides flexibility and
                        scalability, making it suitable for a wide range of
                        stakeholders across the mental health ecosystem.
                    </p>
                </div>
                <div className="pt-10 pb-6 px-28 md:px-12 sm:!px-6">
                    <h2 className="tittle mb-14 text-center">Technology & Architecture</h2>
                    <article className="mb-10">
                        <h3 className="text-light text-xl mb-10 font-semibold">Open-Source & Microservices-Oriented</h3>
                        <span className="mb-4">haiva's core architecture is open-source, promoting transparency, collaboration, and community involvement. haiva is built using a microservices-oriented architecture, which breaks down platform functionality into discrete, manageable services. Each service, whether related to AI processing, data management, or user interface, runs independently. This offers multiple advantages, including:</span>
                        <ul className="mb-4 list-disc">
                            <li><b>Scalability</b>: As mental health organizations grow, they can scale haiva's services without disrupting existing functionality.
                            </li>
                            <li><b>Resilience</b>: Microservices can be independently maintained and updated. If one service experiences an issue, it does not affect the entire platform.
                            </li>
                            <li><b>Customization</b>: Users can enable only the services they require, reducing complexity and optimizing performance.
                            </li>
                        </ul>
                        <span className="mb-4">Each service communicates with the others through lightweight API gateways. This ensures that information flows efficiently between services, even when they are deployed across different devices or geographic locations.</span>
                    </article>
                    <article className="mb-10">
                        <h3 className="text-light text-xl mb-10 font-semibold">AI-Driven Automation & ML</h3>
                        <span className="mb-4">haiva leverages advanced AI and machine learning algorithms for automated transcription, acoustic analysis, natural language processing, and predictive analytics. It continuously learns and improves from data, ensuring that Haiva remains accurate and effective.
                            <br />haiva’s AI capabilities focus on two primary areas: automation and emotional analysis.
                        </span>
                        <ul className="mb-4 list-disc">
                            <li><b>Automation</b>: haiva automates routine administrative tasks such as notetaking, documentation, progress note generation, and treatment planning. <br />These tasks are processed by AI models that operate locally on the practitioner’s device, ensuring that patient data is never exposed to external networks.
                            </li>
                            <li><b>Emotional Analysis</b>: The platform's AI continuously monitors patient interactions during sessions. Using speech analysis, facial expression analysis when available, and contextual understanding, haiva provides near real-time feedback on the emotional state of the patient. This allows practitioners to adjust their approach mid-session, ensuring more effective therapeutic outcomes.
                            </li>
                        </ul>
                        <span className="mb-4">haiva uses pre-trained AI models that are optimized for local execution, ensuring
                            fast, responsive performance even on modest hardware.</span>
                    </article>
                    <article className="mb-10">
                        <h3 className="text-light text-xl mb-10 font-semibold">Decentralized Data Management</h3>
                        <span className="mb-4">One of the most critical aspects of haiva is its decentralized approach to data management. Unlike traditional cloud-based platforms, haiva never stores patient data centrally. This design principle is driven by two key considerations: privacy and compliance.

                        </span>
                        <ul className="mb-4 list-disc">
                            <li><b>Local Storage</b>: Practitioners have the option to store all patient data on
                                their local devices. In this scenario, all AI computations and data analysis
                                take place locally, ensuring that sensitive information never leaves the
                                secure confines of the practitioner's hardware.
                            </li>
                            <li><b>Accredited Storage</b>Accredited Storage: haiva integrates with accredited government or
                                association storage solutions. These storage systems are trusted to
                                manage patient data securely and in compliance with relevant privacy
                                regulations. Institutions can customize their storage setups to align with
                                their legal and ethical obligations.
                            </li>
                            <li><b>Blockchain-Enabled Provenance</b>: haiva uses blockchain technology to
                                ensure data integrity and provenance. Each patient interaction, AI
                                computation, and record generation is logged on a blockchain ledger,
                                providing an immutable audit trail. This guarantees transparency and
                                accountability while maintaining data privacy.
                            </li>
                        </ul>
                        <span className="mb-4">Haiva prioritizes data privacy and security, complying with global regulations like
                            GDPR, HIPAA, and the EU AI Act. It employs decentralized data storage,
                            ensuring that patient data is not stored on haiva's servers. It utilizes robust
                            encryption and access control mechanisms to protect sensitive information.</span>
                    </article>
                    <article className="mb-10">
                        <h3 className="text-light text-xl mb-10 font-semibold">Modularity & Customization</h3>
                        <span className="mb-4">
                            The modularity of haiva allows users to build their ideal platform by selecting
                            specific services that meet their needs. Each service operates as an independent
                            "building brick," which can be added, modified, or removed without affecting the
                            overall system.

                        </span>
                        <ul className="mb-4 list-disc">
                            <li><b>Core Services</b>: Core features of haiva include real-time emotional analysis,
                                AI-powered session summaries, and administrative task automation. These
                                can be enabled or disabled depending on the practitioner’s workflow.

                            </li>
                            <li><b>Custom Modules</b>: Users are free to develop custom modules that extend
                                haiva’s functionality. For example, a university might build a custom
                                research module that integrates haiva's emotional analysis with larger
                                datasets for research purposes.

                            </li>
                            <li><b>Cloud-Native and Scalable</b>: Built on a cloud-native architecture, leveraging
                                the scalability and reliability of cloud infrastructure. It can be deployed in
                                various environments, from small clinics to large institutions.
                            </li>
                            <li><b>Interoperability and Integration</b>
                                : Designed to integrate seamlessly with
                                existing EHR systems and other healthcare platforms. Facilitates data
                                exchange and collaboration through open API standards.
                            </li>
                        </ul>
                    </article>
                </div>
                <div className="flex w-full bg-black">
                    <img className="w-1/3 md:w-2/5 object-cover" src="./about_1.webp" alt="" />
                    <div className="flex flex-col pl-10 pr-[20%] md:pr-6 pt-10 pb-8 md:py-5 md:pl-3 w-2/3 justify-between">
                        <span className="text-2xl md:text-lg sm:text-base text-white mb-6">The future of Haiva is exciting, with planned advancements and expansions that will ensure the platform remains at the cutting edge of mental health care.</span>
                        <span className="text-sm text-light cursor-pointer">Get Involved</span>
                    </div>
                </div>
                <div className="px-24 md:px-12 sm:!px-6 pt-14">
                    <h2 className=" tittle mb-14 text-center">Data Privacy & Security</h2>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <svg className="w-10 h-10 mb-2" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_178_353)">
                                    <path d="M54.5895 25.6234C52.3754 20.8217 49.1325 16.5656 45.0905 13.1567L52.0389 6.20838L48.7962 2.96338L41.2497 10.503C37.0728 8.0869 32.3248 6.83423 27.4997 6.87525C10.3122 6.87525 2.422 21.2234 0.409913 25.6234C0.139813 26.213 0 26.854 0 27.5025C0 28.1511 0.139813 28.7921 0.409913 29.3817C2.62398 34.1834 5.86688 38.4395 9.90887 41.8484L2.96283 48.7967L6.20325 52.0371L13.7497 44.4975C17.9266 46.9136 22.6746 48.1663 27.4997 48.1253C44.6872 48.1253 52.5774 33.7771 54.5895 29.3771C54.8591 28.7881 54.9986 28.148 54.9986 27.5003C54.9986 26.8525 54.8591 26.2124 54.5895 25.6234ZM13.7497 27.5003C13.7454 24.9762 14.437 22.4999 15.7486 20.3434C17.0602 18.1869 18.941 16.4338 21.1843 15.2768C23.4275 14.1197 25.9463 13.6036 28.4638 13.7851C30.9813 13.9666 33.4 14.8387 35.4541 16.3055L32.1266 19.633C30.7297 18.7905 29.1309 18.3416 27.4997 18.3336C25.0686 18.3336 22.737 19.2994 21.0179 21.0184C19.2988 22.7375 18.333 25.0691 18.333 27.5003C18.341 29.1315 18.79 30.7302 19.6324 32.1271L16.3049 35.4546C14.6434 33.1351 13.7498 30.3535 13.7497 27.5003ZM27.4997 41.2503C24.6465 41.2501 21.8649 40.3566 19.5453 38.695L22.8728 35.3675C24.2697 36.21 25.8685 36.6589 27.4997 36.6669C29.9309 36.6669 32.2624 35.7011 33.9815 33.9821C35.7006 32.263 36.6664 29.9314 36.6664 27.5003C36.6584 25.869 36.2094 24.2703 35.367 22.8734L38.6945 19.5459C40.1613 21.6 41.0334 24.0187 41.2149 26.5362C41.3964 29.0537 40.8802 31.5725 39.7232 33.8157C38.5662 36.0589 36.8131 37.9397 34.6566 39.2513C32.5001 40.5629 30.0237 41.2546 27.4997 41.2503Z" fill="#374957" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_178_353">
                                        <rect width="55" height="55" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-semibold mb-6 h-[2rem]">Data Privacy</p>
                            <p>
                                Data Privacy is a fundamental priority, patient data should always remain in the control of practitioners or their accredited institutions.
                                <br /><br />
                                Each practitioner or institution retains full control over their data, ensuring compliance with privacy laws such as GDPR and HIPAA.
                                <br /><br />
                                Haiva's decentralized data storage model ensures that no patient data is ever stored centrally, safeguarding it from breaches or misuse.
                            </p>

                        </div>
                        <div className="flex flex-col mb-8">
                            <svg className="w-10 h-10 mb-2" width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.5503 5.50544L21.0003 0.0200195L4.45033 5.50752C3.20373 5.92077 2.11899 6.71621 1.35011 7.78091C0.581219 8.84561 0.167258 10.1255 0.166992 11.4388V25.0013C0.166992 40.6763 19.3337 49.3325 20.1545 49.6929L20.892 50.02L21.6587 49.7658C22.4816 49.4908 41.8337 42.87 41.8337 25.0013V11.4388C41.8338 10.1251 41.4201 8.84479 40.6512 7.77967C39.8822 6.71456 38.7973 5.9188 37.5503 5.50544Z" fill="#374957" />
                            </svg>
                            <p className="font-semibold mb-6 h-[2rem]">
                                Data Security & Integrity
                            </p>
                            <p>
                                haiva’s security is enforced through a combination of encryption, blockchain technology, and local data storage.
                                <br /><br />
                                Each interaction within the platform is secured with end-to-end encryption, ensuring that data is never exposed during transmission.
                                <br /><br />
                                The use of blockchain further enhances security by providing an immutable record of all actions and transactions within the platform.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="tittle mb-6 mt-8 text-center">Future Roadmap</h2>
                        <div className="bg-[#F2F2F2] px-6 py-4">
                            <p className="font-semibold">
                                Enhanced AI Capabilities:
                            </p>
                            <p>Future updates will include more advanced AI models for deeper emotional analysis, including multi-modal data processing that integrates voice, text, and facial recognition.</p>
                        </div>
                        <div className="bg-[#F2F2F2] px-6 py-4">
                            <p className="font-semibold">
                                Expanded Modular Ecosystem:
                            </p>
                            <p>haiva will continue to expand its modular architecture by developing new modules that cater to different sectors within mental health care, including modules designed for addiction treatment, adolescent mental health, and geriatric care.</p>
                        </div>
                        <div className="bg-[#F2F2F2] px-6 py-4">
                            <p className="font-semibold">
                                Global Expansion:
                            </p>
                            <p>haiva aims to expand globally by partnering with a wide range of stakeholders across the mental health ecosystem, governments and NGOs to bring its AI-driven mental health platform to underserved populations.</p>
                        </div>
                        <button className="bg-dark text-white btn w-fit self-center">
                            Get Involved
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;