export default function SectionHeader({ title, className }) {
  return (
    <div className={`flex items-center pb-8 ${className ?? ""} px-8 sm:px-0`}>
      <h3 className="pr-8 max-w-[70%] whitespace-nowrap gradient-primary-text">
        {title}
      </h3>
      <div className="h-2 rounded-full gradient-section w-full" />
    </div>
  );
}
