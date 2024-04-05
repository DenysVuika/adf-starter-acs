/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, ViewEncapsulation } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
  selector: 'app-org-chart-widget',
  standalone: true,
  templateUrl: 'OrgChartWidget.html',
  imports: [OrganizationChartModule],
  styleUrls: ['OrgChartWidget.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrgChartWidget {
  selectedNodes!: TreeNode[];

  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      data: {
        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Anna Fali',
            title: 'CMO'
          },
          children: [
            {
              label: 'Sales'
            },
            {
              label: 'Marketing'
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'CTO'
          },
          children: [
            {
              label: 'Development'
            },
            {
              label: 'UI/UX Design'
            }
          ]
        }
      ]
    }
  ];
}
