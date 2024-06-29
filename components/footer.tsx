"use client";

import Link from "next/link";
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "./ui/dialog";
import { useState } from "react";

export default function Footer() {
    const [sourcesOpen, setSourcesOpen] = useState(false);

    return (
        <footer className="flex w-full items-center justify-between px-8 py-2">
            <Link
                href="https://kyle.so"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-sm text-foreground/60 hover:underline"
            >
                Kyle Dickey
            </Link>
            <div className="flex w-fit items-center gap-4">
                <p
                    className="cursor-pointer font-serif text-sm text-foreground/60 hover:underline"
                    onClick={() => setSourcesOpen(true)}
                >
                    Sources
                </p>
                <Link
                    href="https://github.com/dickeyy/co-300-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-sm text-foreground/60 hover:underline"
                >
                    GitHub
                </Link>
            </div>
            <SourcesDialog isOpen={sourcesOpen} onChange={setSourcesOpen} />
        </footer>
    );
}

function SourcesDialog({
    isOpen,
    onChange
}: {
    isOpen: boolean;
    onChange: (isOpen: boolean) => void;
}) {
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className="max-w-full sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle className="font-serif text-3xl font-bold">Sources</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <p>
                        Drage, Eleanor, Kerry McInerney, and Jude Browne. “Engineers on
                        Responsibility: Feminist Approaches to Who’s Responsible for Ethical AI.”
                        Ethics and information technology 26.1 (2024): 4-. Web.
                        <br /> <br />
                        Faverio, Michelle,and Alec Tyson. “What the Data Says about Americans’ Views
                        of Artificial Intelligence.” Pew Research Center, 21 Nov. 2023,
                        www.pewresearch.org/short-reads/2023/11/21/what-the-data-says-about-americans-views-of-artificial-intelligence/.Fukuda‐Parr,
                        <br /> <br />
                        Sakiko, and Elizabeth Gibbons. “Emerging Consensus on ‘Ethical AI’: Human
                        Rights Critique of Stakeholder Guidelines.” Global policy 12.S6 (2021):
                        32–44. Web.
                        <br /> <br />
                        Gibney, Elizabeth. “The Battle for Ethical AI at the World’s Biggest
                        Machine-Learning Conference.” Nature (London) 577.7792 (2020): 609–609. Web.
                        <br /> <br />
                        Hardesty, Larry. “Study Finds Gender and Skin-Type Bias in Commercial
                        Artificial-Intelligence Systems.” MIT News, Massachusetts Institute of
                        Technology, 11 Feb. 2018,
                        news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212.IBM
                        Corporation. “Foundation Models: Opportunities, Risks and Mitigations.” Feb.
                        2024.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
