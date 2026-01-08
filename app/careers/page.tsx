export default function CareersPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Careers</h1>
          <div className="space-y-4 text-sm text-[#0F1111] leading-relaxed">
            <p>
              Join our team and help us build the future of e-commerce. We're looking for 
              talented individuals who are passionate about technology and customer service.
            </p>
            <p>
              We offer competitive salaries, comprehensive benefits, and opportunities for 
              professional growth. Whether you're a developer, designer, or business professional, 
              we have a place for you.
            </p>
            <p className="font-semibold">Open Positions:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full Stack Developer</li>
              <li>UI/UX Designer</li>
              <li>Product Manager</li>
              <li>Customer Support Specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

