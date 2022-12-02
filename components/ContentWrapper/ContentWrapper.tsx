export const ContentWrapper = ({ children, style }: { children: React.ReactNode, style?: string }) =>
(<div className={`rounded-[15px] overflow-hidden ${style === 'white' ? 'bg-white shadow-soft' : 'border-2 border-whale-gray'}`}>
    {children}
</div>)