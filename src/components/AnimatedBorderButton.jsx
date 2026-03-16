import {Download} from "lucide-react";







const buttonClasses = "relative inline-flex items-center justify-center bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border no-underline min-h-[3.25rem]";

export const AnimatedBorderButton = ({ children, href, download }) => {
    const content = (
        <>
            <svg
            className='absolute left-0 top-0 w-full h-full pointer-events-none'
            viewBox="0 0 200 60"
            preserveAspectRatio='none'
            style={{overflow: "visible"}}
            >
                <path
                    d="M 30, 1A 29,29 0 0 0 1,30 A 29,29 0 0 0 30,59 L 170,59 A"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth={"2"}
                    strokeDasharray="400 550"
                    strokeDashoffset={"400"}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='download-cv-path'
                />
            </svg>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </>
    );

    if (href) {
        const isDownload = download != null && download !== false;
        return (
            <a
                href={href}
                {...(isDownload ? { download: typeof download === "string" ? download : true } : { target: "_blank", rel: "noopener noreferrer" })}
                className={buttonClasses}
            >
                {content}
            </a>
        );
    }
    return (
        <button className={buttonClasses}>
            {content}
        </button>
    );
}