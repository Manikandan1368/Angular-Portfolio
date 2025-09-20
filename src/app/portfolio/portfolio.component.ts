import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'WMS (Frontend)',
      summary: "A warehouse operations platform managing inbound, outbound, and inventory processes. Built with Angular, integrated with real-time APIs, NGXS for state management, and dynamic form handling. Modules include ASN, GRN, Putaway, Picking, Packing, and Delivery.",
      description: "The NEWAGE Warehouse Management System (WMS) is a logistics application designed to streamline warehouse operations across inbound, outbound, and inventory processes. It includes modules such as Advance Shipment Notice (ASN), Goods Receipt Note (GRN), Putaway, Picking, Packing, and Delivery. The frontend is developed in Angular with NGXS for state management, enabling efficient data handling and real-time updates. Complex form logic is implemented with validation and dynamic fields to support operational workflows. Real-time APIs power inventory tracking and ensure smooth synchronization across the system. The platform enhances usability and performance, offering a seamless experience for warehouse staff.",
      webLink: 'https://www.newage-global.com/',
      tags: [Tag.ANGULAR, Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.POSTGRESDB],
      pictures: ["../../assets/wms.png"],
    },
    {
      id: 2,
      name: 'ShopMate (Full Stack)',
      summary: "A user-centric eCommerce platform designed to simplify and accelerate online shopping. Offers a wide selection of curated products, fast delivery, secure payments, and responsive customer support — all with a focus on sustainability and accessibility.",
      description: "ShopMate is a modern eCommerce solution built to make shopping easier, faster, and more affordable for users across the globe. The platform features a curated marketplace spanning multiple product categories, backed by a fast and reliable delivery system. ShopMate ensures user trust through secure payment processing and dedicated customer support staffed by real humans. The platform also emphasizes environmental responsibility, supporting eco-friendly packaging and products. Whether for everyday essentials or niche items, ShopMate aims to deliver a seamless and sustainable shopping experience for everyone, everywhere.",
      projectLink: 'https://shopmate-angnode.netlify.app',
      tags: [Tag.ANGULAR, Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.TAILWIND, Tag.MONGODB, Tag.NODEJS],
      pictures: ["../../assets/shopmate_log.png", "../../assets/shopmate_home.png", "../../assets/shopmate_detail.png", "../../assets/shopmate_order.png"]
    },
   
  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('MKS | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
