import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.css'
})
export class ServiceComponentComponent {
  toggle(service: any) {
  this.arr.forEach(s => {
    if (s !== service) s.expanded = false;
  });
  service.expanded = !service.expanded;
}
 arr: any[] = [
  {
    title: "Deep Cleaning Services",
    description: "Our deep cleaning services provide a comprehensive cleaning solution that targets every corner of your space. From removing stubborn stains and accumulated dust to sanitizing high-touch surfaces, we ensure a hygienic and fresh environment. We use advanced equipment and eco-friendly cleaning agents to eliminate bacteria, allergens, and odors, making your home or workplace healthier and safer.",
    imageUrl: "/assets/images/deep-clean.jpg",
    expanded: false
  },
  {
    title: "Facade Cleaning Services",
    description: "Our facade cleaning services help maintain the external appearance of your building by removing dirt, pollutants, and stains from surfaces like glass, metal, and stone. Using modern techniques such as high-pressure washing and rope access cleaning, we ensure safety and efficiency while restoring the building’s original shine and enhancing its visual appeal.",
    imageUrl: "/assets/images/home-img.jpg",
    expanded: false
  },
  {
    title: "Floor Polishing Services",
    description: "We specialize in floor polishing services that restore the natural shine and durability of your floors. Whether it's marble, granite, tiles, or wooden flooring, our team uses high-quality polishing compounds and advanced machinery to remove scratches, dullness, and stains, leaving your floors smooth, glossy, and long-lasting.",
    imageUrl: "/assets/images/floor-clean.jpg",
    expanded: false
  },
  {
    title: "Tank Cleaning Services",
    description: "Our tank cleaning services ensure clean and safe water storage by removing sludge, dirt, and harmful bacteria from water tanks. We follow a systematic cleaning and disinfection process using safe chemicals and modern equipment to maintain hygiene and prevent water contamination.",
    imageUrl: "/assets/images/deepcleaning.jpg",
    expanded: false
  },
  {
    title: "Office Cleaning Services",
    description: "We offer professional office cleaning services to create a clean, organized, and productive work environment. Our services include dusting, vacuuming, sanitizing workstations, and maintaining common areas. A clean office not only improves employee productivity but also creates a positive impression on clients and visitors.",
    imageUrl: "/assets/images/deepcleaning.jpg",
    expanded: false
  },
  {
    title: "Post Construction Cleaning Services (Project Cleaning)",
    description: "After construction or renovation, our post-construction cleaning services ensure your space is ready for use. We remove debris, dust, paint stains, and construction residues from all surfaces. Our team pays attention to detail, ensuring every corner is clean, polished, and safe for occupancy.",
    imageUrl: "/assets/images/PESTCONTROL.jpg",
    expanded: false
  },
  {
    title: "Pest Control Services",
    description: "Our pest control services effectively eliminate pests such as termites, cockroaches, rodents, and insects. We use safe and eco-friendly treatments to protect your home and workplace from infestations. Regular pest control helps maintain hygiene, prevents damage, and ensures a healthy living environment.",
    imageUrl: "/assets/images/deepcleaning.jpg",
    expanded: false
  },
  {
    title: "Home & Office Sanitization Services",
    description: "We provide complete sanitization services for homes and offices to eliminate germs, viruses, and bacteria. Using hospital-grade disinfectants and fogging techniques, we ensure thorough sanitization of all surfaces, making your environment safe, especially during health-sensitive situations.",
    imageUrl: "/assets/images/deepcleaning.jpg",
    expanded: false
  },
  {
    title: "Carpet Cleaning Services",
    description: "Our carpet cleaning services remove deep-seated dirt, stains, and allergens from your carpets. Using steam cleaning and advanced extraction methods, we restore freshness, improve indoor air quality, and extend the life of your carpets.",
    imageUrl: "/assets/images/deepcleaning.jpg",
    expanded: false
  },
  {
    title: "Chair Shampooing / Cleaning Services",
    description: "We offer professional chair cleaning and shampooing services to remove stains, dust, and bacteria from office and home seating. Our process ensures deep cleaning without damaging the fabric, providing a clean, fresh, and comfortable seating experience.",
    imageUrl: "/assets/images/deepcleaning.jpg",
    expanded: false
  },
  {
    title: "Sofa Shampooing / Cleaning Services",
    description: "Our sofa cleaning services effectively remove dirt, stains, and odors from fabric and leather sofas. We use specialized cleaning solutions and equipment to restore the original look and feel of your furniture, ensuring hygiene and comfort.",
    imageUrl: "/assets/images/Sofacleaning.jpg",
    expanded: false
  },
  {
    title: "Gardening Services",
    description: "We provide professional gardening services to design, maintain, and enhance your outdoor spaces. From lawn care and plant maintenance to landscaping and seasonal planting, our team ensures your garden remains healthy, attractive, and well-maintained throughout the year.",
    imageUrl: "/assets/images/deepcleaning.jpg",
    expanded: false
  }
];

   @ViewChild('heroSection') heroSection!: ElementRef;

ngAfterViewInit() {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.heroSection.nativeElement.classList.add('show');
        }
      },
      {
        threshold: 0.5
      }
    );

    observer.observe(this.heroSection.nativeElement);
  }

}
