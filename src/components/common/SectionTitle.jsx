const SectionTitle=({label,title,subtitle})=>{

return(

<div className="text-center max-w-3xl mx-auto">

<p

className="

uppercase

tracking-[4px]

text-[#059669]

font-bold

text-sm

mb-4

">

{label}

</p>

<h2

className="

text-4xl

md:text-5xl

font-extrabold

leading-tight

text-[#0A1D3A]

">

{title}

</h2>

<p

className="

text-slate-500

mt-6

text-lg

leading-8

">

{subtitle}

</p>

</div>

)

}

export default SectionTitle;