"use client";

import { Option } from "@/types/option";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const options: Option[][] = [
    [
        {
            title: "AI Hiring System",
            description:
                "Use an AI hiring system that has a 90% accuracy rate but exhibits occasional gender and racial bias.",
            forAI: true,
            analysis:
                "AI Hiring System vs. Human Hiring Process: The AI hiring system offers a significant advantage in terms of efficiency and accuracy, potentially streamlining the recruitment process and reducing time-to-hire. However, the presence of occasional gender and racial bias raises serious ethical concerns. This bias could perpetuate existing inequalities in the workplace and lead to legal issues for the company. On the other hand, the human hiring process, while less accurate, ensures a bias-free system at its core. This approach aligns with ethical hiring practices and promotes diversity, but it may result in slower hiring processes and potentially missed opportunities due to human error. The trade-off between efficiency and fairness highlights the ongoing challenge in balancing technological advancement with ethical considerations in AI development."
        },
        {
            title: "Human Hiring Process",
            description:
                "Use a human hiring process with an 80% accuracy rate but no inherent bias in the system.",
            forAI: false,
            analysis:
                "AI Hiring System vs. Human Hiring Process: The AI hiring system offers a significant advantage in terms of efficiency and accuracy, potentially streamlining the recruitment process and reducing time-to-hire. However, the presence of occasional gender and racial bias raises serious ethical concerns. This bias could perpetuate existing inequalities in the workplace and lead to legal issues for the company. On the other hand, the human hiring process, while less accurate, ensures a bias-free system at its core. This approach aligns with ethical hiring practices and promotes diversity, but it may result in slower hiring processes and potentially missed opportunities due to human error. The trade-off between efficiency and fairness highlights the ongoing challenge in balancing technological advancement with ethical considerations in AI development."
        }
    ],
    [
        {
            title: "AI Surveillance",
            description:
                "Implement an AI surveillance system that greatly reduces crime rates but invades individual privacy.",
            forAI: true,
            analysis:
                "AI Surveillance vs. Current Surveillance: Implementing an AI surveillance system that significantly reduces crime rates presents a compelling case for public safety. It could potentially create safer communities and reduce the strain on law enforcement resources. However, this comes at a considerable cost to individual privacy. The invasive nature of such a system raises concerns about civil liberties, potential abuse of power, and the creation of a surveillance state. There's also the risk of data breaches or misuse of collected information. Maintaining current surveillance levels preserves individual privacy rights but at the expense of potentially higher crime rates. This option respects civil liberties but may leave communities more vulnerable to criminal activities. The dilemma underscores the delicate balance between security and privacy in modern society and the ethical implications of using AI for mass surveillance."
        },
        {
            title: "Current Surveillance",
            description:
                "Maintain current surveillance levels, preserving privacy but with higher crime rates.",
            forAI: false,
            analysis:
                "AI Surveillance vs. Current Surveillance: Implementing an AI surveillance system that significantly reduces crime rates presents a compelling case for public safety. It could potentially create safer communities and reduce the strain on law enforcement resources. However, this comes at a considerable cost to individual privacy. The invasive nature of such a system raises concerns about civil liberties, potential abuse of power, and the creation of a surveillance state. There's also the risk of data breaches or misuse of collected information. Maintaining current surveillance levels preserves individual privacy rights but at the expense of potentially higher crime rates. This option respects civil liberties but may leave communities more vulnerable to criminal activities. The dilemma underscores the delicate balance between security and privacy in modern society and the ethical implications of using AI for mass surveillance."
        }
    ],
    [
        {
            title: "Human Doctors",
            description:
                "Rely on human doctors who may make more errors but provide personalized care.",
            forAI: false,
            analysis:
                "Human Doctors vs. AI Diagnosis: Relying on human doctors maintains the crucial elements of empathy, intuition, and personalized care in medical practice. Doctors can consider a patient's unique circumstances, provide emotional support, and make complex, contextual decisions. However, human doctors are prone to fatigue, bias, and limitations in processing vast amounts of medical data, potentially leading to diagnostic errors. In contrast, AI diagnosis systems offer high accuracy and the ability to process enormous amounts of medical data quickly, potentially catching issues that humans might miss. They can also provide consistent performance without fatigue. However, AI lacks the ability to provide empathetic care, may struggle with unusual or complex cases, and could miss contextual factors that a human doctor would catch. This scenario highlights the challenge of balancing the efficiency and accuracy of AI with the irreplaceable human elements in healthcare."
        },
        {
            title: "AI Diagnosis",
            description:
                "Use an AI to diagnose patients, which is highly accurate but lacks empathy and personal touch.",
            forAI: true,
            analysis:
                "Human Doctors vs. AI Diagnosis: Relying on human doctors maintains the crucial elements of empathy, intuition, and personalized care in medical practice. Doctors can consider a patient's unique circumstances, provide emotional support, and make complex, contextual decisions. However, human doctors are prone to fatigue, bias, and limitations in processing vast amounts of medical data, potentially leading to diagnostic errors. In contrast, AI diagnosis systems offer high accuracy and the ability to process enormous amounts of medical data quickly, potentially catching issues that humans might miss. They can also provide consistent performance without fatigue. However, AI lacks the ability to provide empathetic care, may struggle with unusual or complex cases, and could miss contextual factors that a human doctor would catch. This scenario highlights the challenge of balancing the efficiency and accuracy of AI with the irreplaceable human elements in healthcare."
        }
    ],
    [
        {
            title: "Passenger Safety Priority",
            description:
                "Deploy autonomous vehicles that prioritize passenger safety over pedestrians in accidents.",
            forAI: true,
            analysis:
                "Passenger Safety Priority vs. Pedestrian Safety Priority in Autonomous Vehicles: Prioritizing passenger safety in autonomous vehicles could potentially increase public adoption of this technology, as people might feel safer using these vehicles. This could lead to overall safer roads as human error in driving is reduced. However, this approach raises significant ethical concerns about the value placed on pedestrian lives and could lead to public backlash and legal issues. It also challenges the fundamental principle that a vehicle should minimize harm to all parties involved in an accident. On the other hand, prioritizing pedestrian safety aligns more closely with ethical principles and could foster greater public trust in autonomous vehicle technology. It demonstrates a commitment to public safety beyond just the vehicle's occupants. However, this approach might deter some people from using autonomous vehicles, potentially slowing the adoption of a technology that could overall reduce traffic accidents. This dilemma highlights the complex ethical decisions involved in programming AI for real-world scenarios with life-or-death consequences."
        },
        {
            title: "Pedestrian Safety Priority",
            description:
                "Deploy autonomous vehicles that prioritize pedestrian safety over passengers in accidents.",
            forAI: false,
            analysis:
                "Passenger Safety Priority vs. Pedestrian Safety Priority in Autonomous Vehicles: Prioritizing passenger safety in autonomous vehicles could potentially increase public adoption of this technology, as people might feel safer using these vehicles. This could lead to overall safer roads as human error in driving is reduced. However, this approach raises significant ethical concerns about the value placed on pedestrian lives and could lead to public backlash and legal issues. It also challenges the fundamental principle that a vehicle should minimize harm to all parties involved in an accident. On the other hand, prioritizing pedestrian safety aligns more closely with ethical principles and could foster greater public trust in autonomous vehicle technology. It demonstrates a commitment to public safety beyond just the vehicle's occupants. However, this approach might deter some people from using autonomous vehicles, potentially slowing the adoption of a technology that could overall reduce traffic accidents. This dilemma highlights the complex ethical decisions involved in programming AI for real-world scenarios with life-or-death consequences."
        }
    ],
    [
        {
            title: "Traditional Teaching",
            description:
                "Stick to traditional teaching methods, which may not be as personalized but protect student privacy.",
            forAI: false,
            analysis:
                "Traditional Teaching vs. AI Tutors: Sticking to traditional teaching methods preserves student privacy and maintains the human connection in education, which is crucial for social and emotional development. It allows for spontaneous interactions, adaptability to classroom dynamics, and the nurturing of critical thinking skills through human-to-human dialogue. However, this approach may struggle to provide truly personalized learning experiences, potentially leaving some students behind or failing to challenge others adequately. On the other hand, AI tutors offer the promise of highly customized learning experiences, adapting in real-time to each student's pace, learning style, and areas of difficulty. This could potentially lead to improved educational outcomes and more engaged students. However, the extensive data collection required for this personalization raises significant privacy concerns. There's the risk of data breaches, misuse of sensitive information about minors, and potential long-term consequences of having detailed learning profiles. This scenario underscores the tension between leveraging technology for educational advancement and protecting student privacy and well-being."
        },
        {
            title: "AI Tutors",
            description:
                "Implement AI tutors that provide customized learning experiences but collect extensive data on students.",
            forAI: true,
            analysis:
                "Traditional Teaching vs. AI Tutors: Sticking to traditional teaching methods preserves student privacy and maintains the human connection in education, which is crucial for social and emotional development. It allows for spontaneous interactions, adaptability to classroom dynamics, and the nurturing of critical thinking skills through human-to-human dialogue. However, this approach may struggle to provide truly personalized learning experiences, potentially leaving some students behind or failing to challenge others adequately. On the other hand, AI tutors offer the promise of highly customized learning experiences, adapting in real-time to each student's pace, learning style, and areas of difficulty. This could potentially lead to improved educational outcomes and more engaged students. However, the extensive data collection required for this personalization raises significant privacy concerns. There's the risk of data breaches, misuse of sensitive information about minors, and potential long-term consequences of having detailed learning profiles. This scenario underscores the tension between leveraging technology for educational advancement and protecting student privacy and well-being."
        }
    ],
    [
        {
            title: "Human Creativity",
            description:
                "Rely on human creativity for art and music, ensuring originality and emotional depth.",
            forAI: false,
            analysis:
                "Human Creativity vs. AI Creativity: Relying on human creativity for art and music ensures the preservation of the unique emotional depth, personal experiences, and cultural contexts that inform human artistic expression. Human-created art and music often resonate on a deeper level with audiences, conveying complex emotions and ideas that AI might struggle to replicate. However, human creativity can be limited by time, resources, and individual capabilities. In contrast, AI-generated art and music offer exciting possibilities for innovation and productivity. AI can produce high volumes of content quickly, explore new stylistic combinations, and even create entirely new forms of artistic expression. This could democratize art creation and provide new tools for human artists. However, AI-generated art may lack the emotional nuance, intentionality, and cultural significance often found in human-created works. There's also the risk of homogenization of art if AI systems are trained on similar datasets. This scenario highlights the ongoing debate about the nature of creativity and the role of technology in artistic expression."
        },
        {
            title: "AI Creativity",
            description:
                "Use AI to generate art and music, which can produce high volumes quickly but may lack emotional depth.",
            forAI: true,
            analysis:
                "Human Creativity vs. AI Creativity: Relying on human creativity for art and music ensures the preservation of the unique emotional depth, personal experiences, and cultural contexts that inform human artistic expression. Human-created art and music often resonate on a deeper level with audiences, conveying complex emotions and ideas that AI might struggle to replicate. However, human creativity can be limited by time, resources, and individual capabilities. In contrast, AI-generated art and music offer exciting possibilities for innovation and productivity. AI can produce high volumes of content quickly, explore new stylistic combinations, and even create entirely new forms of artistic expression. This could democratize art creation and provide new tools for human artists. However, AI-generated art may lack the emotional nuance, intentionality, and cultural significance often found in human-created works. There's also the risk of homogenization of art if AI systems are trained on similar datasets. This scenario highlights the ongoing debate about the nature of creativity and the role of technology in artistic expression."
        }
    ],
    [
        {
            title: "Human Judges",
            description:
                "Rely on human judges for legal decisions, ensuring empathy and moral judgment.",
            forAI: false,
            analysis:
                "Human Judges vs. AI Judges: Human judges bring empathy, moral judgment, and a nuanced understanding of societal contexts to legal decisions. They can consider complex ethical implications, show leniency when appropriate, and adapt to changing societal norms. However, human judges are also susceptible to biases, inconsistencies, and potential corruption. Their decisions can be influenced by factors like personal experiences or fatigue, potentially leading to inequitable outcomes. AI judges, on the other hand, offer the potential for faster, more consistent legal decisions. They could process vast amounts of legal precedent quickly and apply laws uniformly across cases. This could potentially reduce case backlogs and minimize inconsistencies in sentencing. However, AI judges lack human empathy and the ability to truly understand the nuanced, human aspects of many legal cases. They might struggle with unprecedented scenarios or fail to consider extenuating circumstances that a human judge would recognize. This dilemma underscores the challenge of balancing efficiency and consistency with the need for human judgment and empathy in the legal system."
        },
        {
            title: "AI Judges",
            description:
                "Use AI to make legal decisions, which can be faster and more consistent but lack human empathy.",
            forAI: true,
            analysis:
                "Human Judges vs. AI Judges: Human judges bring empathy, moral judgment, and a nuanced understanding of societal contexts to legal decisions. They can consider complex ethical implications, show leniency when appropriate, and adapt to changing societal norms. However, human judges are also susceptible to biases, inconsistencies, and potential corruption. Their decisions can be influenced by factors like personal experiences or fatigue, potentially leading to inequitable outcomes. AI judges, on the other hand, offer the potential for faster, more consistent legal decisions. They could process vast amounts of legal precedent quickly and apply laws uniformly across cases. This could potentially reduce case backlogs and minimize inconsistencies in sentencing. However, AI judges lack human empathy and the ability to truly understand the nuanced, human aspects of many legal cases. They might struggle with unprecedented scenarios or fail to consider extenuating circumstances that a human judge would recognize. This dilemma underscores the challenge of balancing efficiency and consistency with the need for human judgment and empathy in the legal system."
        }
    ],
    [
        {
            title: "Human Customer Service",
            description:
                "Rely on human customer service representatives for personalized and empathetic interactions.",
            forAI: false,
            analysis:
                'Human Customer Service vs. AI Customer Service: Human customer service representatives provide personalized, empathetic interactions that can be crucial in handling complex or emotionally charged customer issues. They can think creatively to solve unique problems, understand cultural nuances, and provide a human touch that many customers value. However, human customer service can be inconsistent, is limited by working hours, and can be costly for businesses to maintain at scale. AI customer service, on the other hand, offers 24/7 availability, consistent responses, and the ability to handle a large volume of queries simultaneously. It can quickly access vast amounts of information to solve customer problems and doesn\'t suffer from fatigue or emotional fluctuations. However, AI may struggle with understanding context, sarcasm, or complex emotions, potentially leading to frustrating experiences for customers with nuanced issues. It also lacks the ability to truly empathize or go "off-script" to solve unique problems. This scenario highlights the challenge of balancing efficiency and scalability with the need for empathy and human understanding in customer interactions.'
        },
        {
            title: "AI Customer Service",
            description:
                "Use AI for customer service, which can handle queries 24/7 with high efficiency but lacks empathy.",
            forAI: true,
            analysis:
                'Human Customer Service vs. AI Customer Service: Human customer service representatives provide personalized, empathetic interactions that can be crucial in handling complex or emotionally charged customer issues. They can think creatively to solve unique problems, understand cultural nuances, and provide a human touch that many customers value. However, human customer service can be inconsistent, is limited by working hours, and can be costly for businesses to maintain at scale. AI customer service, on the other hand, offers 24/7 availability, consistent responses, and the ability to handle a large volume of queries simultaneously. It can quickly access vast amounts of information to solve customer problems and doesn\'t suffer from fatigue or emotional fluctuations. However, AI may struggle with understanding context, sarcasm, or complex emotions, potentially leading to frustrating experiences for customers with nuanced issues. It also lacks the ability to truly empathize or go "off-script" to solve unique problems. This scenario highlights the challenge of balancing efficiency and scalability with the need for empathy and human understanding in customer interactions.'
        }
    ],
    [
        {
            title: "AI Financial Advisor",
            description:
                "Use an AI financial advisor for investment decisions, which can analyze data quickly and accurately but may lack human insight.",
            forAI: true,
            analysis:
                "AI Financial Advisor vs. Human Financial Advisor: An AI financial advisor can analyze vast amounts of market data quickly, identify patterns, and make data-driven investment decisions without emotional biases. It can provide 24/7 service and potentially offer more cost-effective solutions for a broader range of clients. However, AI may struggle to fully understand a client's personal circumstances, risk tolerance, or long-term life goals beyond what can be quantified. It might also fail to account for unprecedented economic situations or unique personal factors. Human financial advisors, while potentially slower in data analysis, can offer personalized advice that takes into account a client's emotional relationship with money, family circumstances, and long-term aspirations. They can provide reassurance during market volatility and adapt strategies based on subtle cues from clients. However, human advisors are subject to their own biases, may not be available 24/7, and could miss patterns in data that AI would catch. This scenario underscores the challenge of balancing data-driven efficiency with personalized, empathetic financial guidance."
        },
        {
            title: "Human Financial Advisor",
            description:
                "Rely on human financial advisors for investment decisions, ensuring personalized advice but potentially slower analysis.",
            forAI: false,
            analysis:
                "AI Financial Advisor vs. Human Financial Advisor: An AI financial advisor can analyze vast amounts of market data quickly, identify patterns, and make data-driven investment decisions without emotional biases. It can provide 24/7 service and potentially offer more cost-effective solutions for a broader range of clients. However, AI may struggle to fully understand a client's personal circumstances, risk tolerance, or long-term life goals beyond what can be quantified. It might also fail to account for unprecedented economic situations or unique personal factors. Human financial advisors, while potentially slower in data analysis, can offer personalized advice that takes into account a client's emotional relationship with money, family circumstances, and long-term aspirations. They can provide reassurance during market volatility and adapt strategies based on subtle cues from clients. However, human advisors are subject to their own biases, may not be available 24/7, and could miss patterns in data that AI would catch. This scenario underscores the challenge of balancing data-driven efficiency with personalized, empathetic financial guidance."
        }
    ],
    [
        {
            title: "AI Music Recommendation",
            description:
                "Use an AI system to recommend music based on listening habits, providing highly personalized suggestions but potentially narrowing exposure.",
            forAI: true,
            analysis:
                'AI Music Recommendation vs. Human Music Recommendation: AI music recommendation systems can analyze a user\'s listening habits in great detail, providing highly personalized suggestions that align closely with individual tastes. This can lead to a more tailored and satisfying listening experience, potentially introducing users to new songs within their preferred styles. However, this high level of personalization risks creating a "filter bubble," where users are rarely exposed to music outside their established preferences, potentially limiting musical exploration and discovery. Human DJs or curators, while less personalized in their approach, bring a wealth of musical knowledge, cultural context, and the ability to make unexpected connections between different styles of music. They can introduce listeners to diverse genres and artists they might not have considered, broadening musical horizons. However, their recommendations might not always align with individual tastes and could be influenced by personal biases or industry pressures. This scenario highlights the tension between hyper-personalization and the value of human-curated diversity in cultural experiences.'
        },
        {
            title: "Human Music Recommendation",
            description:
                "Rely on human DJs or curators for music recommendations, ensuring a diverse range of suggestions but less personalization.",
            forAI: false,
            analysis:
                'AI Music Recommendation vs. Human Music Recommendation: AI music recommendation systems can analyze a user\'s listening habits in great detail, providing highly personalized suggestions that align closely with individual tastes. This can lead to a more tailored and satisfying listening experience, potentially introducing users to new songs within their preferred styles. However, this high level of personalization risks creating a "filter bubble," where users are rarely exposed to music outside their established preferences, potentially limiting musical exploration and discovery. Human DJs or curators, while less personalized in their approach, bring a wealth of musical knowledge, cultural context, and the ability to make unexpected connections between different styles of music. They can introduce listeners to diverse genres and artists they might not have considered, broadening musical horizons. However, their recommendations might not always align with individual tastes and could be influenced by personal biases or industry pressures. This scenario highlights the tension between hyper-personalization and the value of human-curated diversity in cultural experiences.'
        }
    ],
    [
        {
            title: "Transparent AI",
            description:
                "Use an AI system that's fully transparent about its decision-making process but operates 20% slower.",
            forAI: true,
            analysis:
                "Transparent AI vs. Black Box AI: A transparent AI system that fully discloses its decision-making process promotes accountability and builds trust with users. It allows for easier auditing, helps identify and correct biases, and provides valuable insights into how the AI reaches its conclusions. This transparency is crucial for applications in sensitive areas like healthcare or finance, where understanding the reasoning behind decisions is often as important as the decisions themselves. However, the trade-off for this transparency is reduced efficiency, which could limit the AI's applicability in scenarios requiring rapid decision-making. On the other hand, a black box AI system that operates 30% faster could significantly enhance productivity in various applications. Its increased efficiency could be particularly valuable in time-sensitive scenarios or when processing large volumes of data. However, the opacity of its decision-making process raises serious concerns about accountability and the potential for hidden biases or errors. This lack of transparency could erode public trust, make it difficult to ensure ethical operation, and potentially lead to unintended consequences. This dilemma underscores the ongoing challenge in AI development of balancing performance with explainability and ethical considerations."
        },
        {
            title: "Black Box AI",
            description:
                "Implement a faster AI system that's 30% more efficient but its decision-making process is opaque.",
            forAI: false,
            analysis:
                "Transparent AI vs. Black Box AI: A transparent AI system that fully discloses its decision-making process promotes accountability and builds trust with users. It allows for easier auditing, helps identify and correct biases, and provides valuable insights into how the AI reaches its conclusions. This transparency is crucial for applications in sensitive areas like healthcare or finance, where understanding the reasoning behind decisions is often as important as the decisions themselves. However, the trade-off for this transparency is reduced efficiency, which could limit the AI's applicability in scenarios requiring rapid decision-making. On the other hand, a black box AI system that operates 30% faster could significantly enhance productivity in various applications. Its increased efficiency could be particularly valuable in time-sensitive scenarios or when processing large volumes of data. However, the opacity of its decision-making process raises serious concerns about accountability and the potential for hidden biases or errors. This lack of transparency could erode public trust, make it difficult to ensure ethical operation, and potentially lead to unintended consequences. This dilemma underscores the ongoing challenge in AI development of balancing performance with explainability and ethical considerations."
        }
    ],
    [
        {
            title: "AI Medical Diagnosis",
            description:
                "Rely on an AI system for medical diagnoses that's 95% accurate but occasionally makes unexplainable decisions.",
            forAI: true,
            analysis:
                "AI Medical Diagnosis vs. Human Medical Diagnosis: An AI system for medical diagnoses that boasts a 95% accuracy rate offers the potential for significant improvements in healthcare outcomes. It could process vast amounts of medical data quickly, potentially catching subtle patterns that human doctors might miss. This high accuracy could lead to earlier detection of diseases, more precise treatment plans, and overall better patient outcomes. However, the occasional unexplainable decisions raise serious concerns about accountability and patient trust. In critical healthcare decisions, the ability to understand and explain the reasoning behind a diagnosis is crucial, both for patient comfort and for legal and ethical reasons. On the other hand, human doctors, while slightly less accurate at 90%, bring the invaluable ability to explain their reasoning clearly"
        },
        {
            title: "Human Medical Diagnosis",
            description:
                "Stick with human doctors for diagnoses, who are 90% accurate but can always explain their reasoning.",
            forAI: false,
            analysis:
                "AI Medical Diagnosis vs. Human Medical Diagnosis: An AI system for medical diagnoses that boasts a 95% accuracy rate offers the potential for significant improvements in healthcare outcomes. It could process vast amounts of medical data quickly, potentially catching subtle patterns that human doctors might miss. This high accuracy could lead to earlier detection of diseases, more precise treatment plans, and overall better patient outcomes. However, the occasional unexplainable decisions raise serious concerns about accountability and patient trust. In critical healthcare decisions, the ability to understand and explain the reasoning behind a diagnosis is crucial, both for patient comfort and for legal and ethical reasons. On the other hand, human doctors, while slightly less accurate at 90%, bring the invaluable ability to explain their reasoning clearly"
        }
    ]
];

export default function Options() {
    const [index, setIndex] = useState(0);
    const [selcted, setSelected] = useState<Option | null>(null);

    const optionARef = useRef<HTMLDivElement>(null);
    const optionBRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-12 p-4 sm:p-4">
            {!selcted ? (
                <>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-serif text-4xl font-bold">Would you rather</h1>
                        <p className="text-foreground/60 font-serif text-lg">
                            AI ethics and responsibility ownership
                        </p>
                    </div>
                    <div className="grid w-full max-w-full grid-cols-1 items-center justify-evenly gap-4 sm:max-w-[55%] sm:grid-cols-7">
                        <motion.div
                            className="col-span-3 h-full w-full"
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <OptionA
                                option={options[index][0]}
                                setSelected={setSelected}
                                ref={optionARef}
                            />
                        </motion.div>
                        <motion.p
                            className="col-span-1 w-full text-center font-serif text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                        >
                            or
                        </motion.p>
                        <motion.div
                            className="col-span-3 h-full w-full"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.75 }}
                        >
                            <OptionB
                                option={options[index][1]}
                                setSelected={setSelected}
                                ref={optionBRef}
                            />
                        </motion.div>
                    </div>
                </>
            ) : (
                <>
                    <motion.div
                        className="flex w-full max-w-[45%] flex-col items-center gap-2"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        exit={{ opacity: 0, y: 100 }}
                    >
                        <p className="text-foreground/60 font-serif text-sm">You picked</p>
                        <h1 className="font-serif text-2xl font-bold">{selcted.title}</h1>

                        <div className="mt-8 flex w-full">
                            <OptionInDepth option={selcted} />
                        </div>

                        {index < options.length - 1 ? (
                            <Button
                                className="mt-12 w-full"
                                variant={"ghost"}
                                onClick={() => {
                                    setIndex(index + 1);
                                    setSelected(null);
                                }}
                            >
                                Next
                            </Button>
                        ) : (
                            <Button
                                className="mt-12 w-full"
                                variant={"ghost"}
                                onClick={() => {
                                    setIndex(0);
                                    setSelected(null);
                                }}
                            >
                                Start Over
                            </Button>
                        )}
                    </motion.div>
                </>
            )}
        </div>
    );
}

function OptionA({
    option,
    setSelected,
    ref
}: {
    option: Option;
    setSelected: React.Dispatch<React.SetStateAction<Option | null>>;
    ref: React.RefObject<HTMLDivElement>;
}) {
    return (
        <Card
            className="col-span-3 h-full w-full cursor-pointer bg-purple-500/40 transition-colors ease-in-out hover:bg-purple-500/60"
            onClick={() => setSelected(option)}
            ref={ref}
        >
            <CardHeader>
                <CardTitle className="font-serif text-2xl font-bold">{option.title}</CardTitle>
                <CardDescription className="text-foreground/60">
                    {option.description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}

function OptionB({
    option,
    setSelected,
    ref
}: {
    option: Option;
    setSelected: React.Dispatch<React.SetStateAction<Option | null>>;
    ref: React.RefObject<HTMLDivElement>;
}) {
    return (
        <Card
            className="col-span-3 h-full w-full cursor-pointer bg-green-500/40 transition-colors ease-in-out hover:bg-green-500/60"
            onClick={() => setSelected(option)}
            ref={ref}
        >
            <CardHeader>
                <CardTitle className="font-serif text-2xl font-bold">{option.title}</CardTitle>
                <CardDescription className="text-foreground/60">
                    {option.description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}

function OptionInDepth({ option }: { option: Option }) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="font-serif text-2xl font-bold">Situation Analysis</CardTitle>
                <CardDescription className="text-foreground/60">{option.analysis}</CardDescription>
            </CardHeader>
        </Card>
    );
}
