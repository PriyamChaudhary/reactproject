import React from 'react'
import { HardHat, Building, Users, Award, Truck, CheckCircle } from 'lucide-react'
import './About.css'

const Card = ({ icon: Icon, title, children }) => (
  <div className="card">
    <Icon className="card-icon" />
    <h3 className="card-title">{title}</h3>
    <p>{children}</p>
  </div>
)

export default function About() {
  return (
    <div className="about">
      <section className="hero">
        <div className="container">
          <h1>About BuildCorp</h1>
          <p>Building Dreams, Constructing Realities: Your Trusted Partner in Construction Excellence Since 2000</p>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-content">
            <div>
              <h2>Our Story</h2>
              <p>
                For over two decades, BuildCorp has been at the forefront of the construction industry, 
                delivering excellence in every project we undertake. Our journey began with a simple yet 
                powerful vision: to transform skylines and communities through innovative construction solutions.
              </p>
              <p>
                Today, we stand proud as a testament to that vision, having completed numerous landmark 
                projects that have reshaped cities and improved lives. Our commitment to quality, 
                innovation, and client satisfaction has made us a leader in the industry.
              </p>
              <ul className="achievements">
                {['20+ Years of Excellence', '500+ Projects Completed', '100% Client Satisfaction'].map((item, index) => (
                  <li key={index}>
                    <CheckCircle className="icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-grid">
              {[
                'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=2087&ixlib=rb-4.0.3'
              ].map((src, index) => (
                <img key={index} src={src} alt={`Construction project ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2>Why Choose BuildCorp?</h2>
          <div className="card-grid">
            {[
              { icon: HardHat, title: 'Expertise', description: 'Unparalleled expertise in diverse construction projects' },
              { icon: Users, title: 'Dedicated Team', description: 'Skilled professionals committed to excellence' },
              { icon: Award, title: 'Award-Winning', description: 'Recognized for our quality and innovation' },
              { icon: Truck, title: 'Timely Delivery', description: 'On-time project completion and resource management' }
            ].map((item, index) => (
              <Card key={index} icon={item.icon} title={item.title}>
                {item.description}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="commitment">
        <div className="container">
          <h2>Our Commitment</h2>
          <div className="card-grid">
            {[
              { icon: Building, title: 'Quality Construction', description: 'We adhere to the highest standards of construction, ensuring durability and excellence in every structure we build.' },
              { icon: Users, title: 'Client-Centric Approach', description: 'Your vision is our mission. We work closely with our clients to bring their ideas to life, ensuring satisfaction at every step.' },
              { icon: Award, title: 'Industry Recognition', description: 'Our work speaks for itself, with numerous awards and accolades recognizing our contribution to the construction industry.' }
            ].map((item, index) => (
              <Card key={index} icon={item.icon} title={item.title}>
                {item.description}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Build Your Future?</h2>
          <p>Let's discuss your next project and turn your vision into reality.</p>
          <a href="/contact" className="button">Contact Us Today</a>
        </div>
      </section>
    </div>
  )
}