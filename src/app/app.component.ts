import { Component } from '@angular/core';

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    slug: 'back-end',
    name: 'Back End',
  },
  {
    id: 2,
    slug: 'front-end',
    name: 'Front End',
  },
  {
    id: 3,
    slug: 'full-stack',
    name: 'Full Stack',
  },
];

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

const TAGS: Tag[] = [
  {
    id: 1,
    slug: 'laravel',
    name: 'Laravel',
  },
  {
    id: 2,
    slug: 'react',
    name: 'React',
  },
  {
    id: 3,
    slug: 'node-js',
    name: 'Node JS',
  },
  {
    id: 4,
    slug: 'aspnet',
    name: 'ASP.net',
  },
  {
    id: 5,
    slug: 'javascript',
    name: 'JavaScript',
  },
  {
    id: 6,
    slug: 'html',
    name: 'HTML',
  },
  {
    id: 7,
    slug: 'css',
    name: 'CSS',
  },
  {
    id: 8,
    slug: 'sql',
    name: 'SQL',
  },
  {
    id: 9,
    slug: 'mongodb',
    name: 'MongoDB',
  },
  {
    id: 10,
    slug: 'mysql',
    name: 'MySQL',
  },
];

export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Portfolio Showcase',
    excerpt:
      'Esse doloremque aut commodi qui officia. Cum repudiandae qui tenetur quae.',
    body: '<p>Molestiae praesentium quia fugiat dolore. Itaque soluta voluptatibus dicta dolores officia repudiandae id. Facilis asperiores repellat quam libero reprehenderit pariatur.</p></p>Blanditiis laboriosam consequatur velit numquam distinctio. Fugiat voluptas est quisquam eligendi at est quis.</p></p>Voluptate voluptas ut odit ab possimus. Ullam voluptates aliquid quia distinctio perspiciatis corporis sint molestiae. Porro modi enim quia corrupti dolore dolorem.</p></p>Soluta sint praesentium neque porro atque aut iusto. Tempora et doloribus repudiandae consequatur provident.</p>',
    url: null,
    slug: 'portfolio-showcase',
    published_date: '2023-02-23',
    image: null,
    thumb: null,
    category_id: 3,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T21:26:18.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [
      {
        id: 1,
        slug: 'laravel',
        name: 'Laravel',
        pivot: {
          projects_id: 1,
          tags_id: 1,
        },
      },
      {
        id: 2,
        slug: 'react',
        name: 'React',
        pivot: {
          projects_id: 1,
          tags_id: 2,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'SSD Yearbook',
    excerpt:
      'Maiores voluptate vero eum. Quia sapiente aut facilis qui sit rerum aliquam et.',
    body: '<p>Incidunt nisi labore accusamus nam ut architecto. Illum qui impedit voluptatem commodi tenetur est esse. Sunt eveniet officia eveniet cum.</p></p>Voluptate eos porro consequatur quia quaerat dolore voluptas modi. Ducimus sed ut ducimus in. Temporibus repudiandae sapiente minima ut.</p></p>Ut quasi molestiae enim qui. Necessitatibus veritatis temporibus deserunt officia cupiditate rerum cupiditate. Facere perferendis dolores temporibus maiores itaque. Dolor rerum ipsa at minus at doloremque.</p>',
    url: null,
    slug: 'ssd-yearbook',
    published_date: '2023-02-23',
    image: null,
    thumb: null,
    category_id: 1,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T21:24:13.000000Z',
    category: {
      id: 1,
      slug: 'back-end',
      name: 'Back End',
    },
    tags: [
      {
        id: 3,
        slug: 'node-js',
        name: 'Node JS',
        pivot: {
          projects_id: 2,
          tags_id: 3,
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Movie Mania',
    excerpt:
      'Repudiandae consequatur debitis saepe accusamus quia commodi molestiae sed. Similique officiis exercitationem maxime est voluptas.',
    body: '<p>Quis nemo illum et quo. Voluptas eius et reiciendis ratione cupiditate quia. Maxime rerum error explicabo rerum blanditiis.</p></p>Neque aut voluptas est dolorem sapiente. Dolor aut est et velit et. Minus accusantium voluptatem quibusdam et.</p></p>Voluptas quaerat deleniti vitae blanditiis quibusdam sunt dolor. Ut dignissimos aut et quod quae perspiciatis ipsam. Corporis deleniti commodi voluptate debitis temporibus dolor modi.</p></p>Beatae officiis est repudiandae inventore. Recusandae cumque doloribus officiis qui repellendus id aspernatur. Enim quam rerum fuga non. Tempora praesentium veritatis vitae ab quia at ut.</p></p>Neque optio tempora occaecati occaecati impedit. Explicabo et error doloremque porro sapiente. Minus veniam nobis earum. Molestiae illo rerum veniam repellendus ab.</p>',
    url: null,
    slug: 'movie-mania',
    published_date: null,
    image: null,
    thumb: null,
    category_id: null,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T19:07:22.000000Z',
    category: null,
    tags: [],
  },
  {
    id: 4,
    title: 'News Site Homepage',
    excerpt: 'Quod dolor ut excepturi id. Et pariatur velit et nihil fuga et.',
    body: '<p>Velit delectus est laborum tempora aspernatur repellat sunt. Nemo corporis deserunt deserunt possimus. Unde dolor culpa vero deserunt corrupti illum laborum. Atque est quod consequatur alias quos nemo nihil.</p></p>Molestiae voluptatem voluptate id velit enim qui distinctio. Dolor quod voluptatem ut nesciunt natus quia.</p></p>Odio amet necessitatibus quam eum et provident. Et veritatis voluptas culpa nobis. Earum magnam omnis dolorem officia voluptas ut.</p>',
    url: null,
    slug: 'news-site-homepage',
    published_date: null,
    image: null,
    thumb: null,
    category_id: 2,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T19:07:22.000000Z',
    category: {
      id: 2,
      slug: 'front-end',
      name: 'Front End',
    },
    tags: [],
  },
  {
    id: 5,
    title: 'JavaScript Game',
    excerpt:
      'Architecto cupiditate rem cumque qui ut placeat a. Asperiores nesciunt cum esse laborum officia consequatur delectus.',
    body: '<p>Quos laudantium molestiae impedit ut exercitationem sed. Et aliquam veniam exercitationem soluta eligendi. Autem nam laborum totam dolorem quis sint. Culpa nihil iure ab nihil ipsam aut tempore tenetur.</p></p>Impedit dolor consequatur tempora nulla dolores quia provident. Molestiae sit quisquam cupiditate quia cumque. Rerum quia quam dolor consequatur. Nihil inventore nostrum repellat quas.</p></p>Et dolores voluptas qui. Inventore asperiores consequatur vero et accusamus. Sint vero et laudantium aut.</p>',
    url: null,
    slug: 'javascript-game',
    published_date: null,
    image: null,
    thumb: null,
    category_id: 2,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T19:07:22.000000Z',
    category: {
      id: 2,
      slug: 'front-end',
      name: 'Front End',
    },
    tags: [],
  },
  {
    id: 6,
    title: 'iOS App',
    excerpt:
      'Molestias aut in laudantium voluptas quaerat deserunt. Aspernatur quibusdam voluptatem fuga nihil ut est modi magnam.',
    body: '<p>Maiores ducimus animi enim aut ratione laboriosam est. Aut labore deserunt quis.</p></p>Vel excepturi dolore occaecati quisquam deleniti voluptatem saepe. Architecto vitae distinctio laborum. Et praesentium nemo possimus nihil numquam.</p></p>Quia dolor laborum quas porro est quaerat. Illo velit repudiandae voluptatem nemo. Officia numquam ad dignissimos quia. Impedit cumque rerum earum et. Molestiae reprehenderit beatae sed voluptatem aut.</p>',
    url: null,
    slug: 'ios-app',
    published_date: null,
    image: null,
    thumb: null,
    category_id: null,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T19:07:22.000000Z',
    category: null,
    tags: [],
  },
  {
    id: 7,
    title: 'Android App',
    excerpt:
      'Inventore neque aut mollitia dolore sequi. Dolores earum voluptas debitis possimus sed porro delectus.',
    body: '<p>Enim voluptas minus repellendus et suscipit aut quis atque. Quis tempora sed atque ad vitae esse. Eaque neque velit et quia et dolore. Placeat voluptas voluptatibus beatae porro aut.</p></p>Ipsa cupiditate eius est. Pariatur possimus corrupti rerum molestiae nisi voluptatem cupiditate. Laborum dignissimos accusamus laboriosam quisquam at ad. Vitae est commodi debitis. Aliquid ipsam est blanditiis debitis.</p></p>Quam rerum voluptate qui debitis blanditiis vitae et. Nobis qui qui tenetur ea nulla distinctio voluptatibus iure. Ullam quo laboriosam quam totam quasi. Fuga eligendi nisi similique dignissimos illo.</p>',
    url: null,
    slug: 'android-app',
    published_date: null,
    image: null,
    thumb: null,
    category_id: null,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T19:07:22.000000Z',
    category: null,
    tags: [],
  },
  {
    id: 8,
    title: 'Industry Project',
    excerpt:
      'Tenetur eos sed est est et. Voluptatibus nam cupiditate ea qui et.',
    body: '<p>Repellat est qui aspernatur. Et est odit reiciendis mollitia sit. Laudantium qui est consequuntur voluptatum eum. Voluptatem pariatur porro qui quae quo cupiditate quam.</p></p>Est a ipsam aliquam excepturi culpa. Est beatae alias et delectus dolorem. Incidunt numquam voluptas amet neque numquam architecto sed. Illo veritatis reiciendis et quia tenetur unde sunt et.</p></p>Accusamus id aut doloremque occaecati. Quia incidunt vel quae et. Maxime atque quas suscipit molestiae sunt omnis.</p></p>Aspernatur reiciendis corrupti perspiciatis in qui nulla. Id eos soluta beatae sequi voluptatibus. Enim maiores qui voluptate. A voluptate sunt rerum atque ut alias. Iste ea nam dolor officiis.</p></p>Sed nam nesciunt numquam qui laudantium nihil. Occaecati suscipit consectetur rerum. Voluptate mollitia dolor cum accusantium.</p></p>Voluptatem molestiae accusantium laudantium ad saepe at quis. Similique qui sed id labore. Quis itaque fuga ratione ipsum. Laborum assumenda reprehenderit ratione molestias.</p>',
    url: null,
    slug: 'industry-project',
    published_date: '2023-02-22',
    image: null,
    thumb: null,
    category_id: 3,
    created_at: '2023-02-23T19:07:22.000000Z',
    updated_at: '2023-02-23T21:40:34.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [],
  },
  {
    id: 9,
    title: 'Hello',
    excerpt: 'Some information',
    body: 'Some more information',
    url: null,
    slug: 'hello',
    published_date: '2023-02-20',
    image: 'images/Screenshot_20230216_013252.png',
    thumb: 'images/Screenshot_20230216_013252.png',
    category_id: 1,
    created_at: '2023-02-23T21:53:19.000000Z',
    updated_at: '2023-02-23T21:53:19.000000Z',
    category: {
      id: 1,
      slug: 'back-end',
      name: 'Back End',
    },
    tags: [
      {
        id: 10,
        slug: 'mysql',
        name: 'MySQL',
        pivot: {
          projects_id: 9,
          tags_id: 10,
        },
      },
    ],
  },
];

export class Year {
  year: number = 2022;

  constructor() {
    const date = new Date();
    const year = date.getFullYear();

    return { year: year };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.projects.scss'],
})
export class AppComponent {
  title = "Catherine Addison's Portfolio";

  public projects = PROJECTS;
  public categories = CATEGORIES;
  public tags = TAGS;
  public year = new Year().year;

  selectedCategory: Category | undefined;
  selectedTag: Tag | undefined;
  selectedProject: Project | undefined;

  handleCategoryClick(category: Category) {
    this.selectedCategory = category;
    this.selectedTag = undefined;
    this.selectedProject = undefined;
  }

  handleTagClick(tag: Tag) {
    this.selectedTag = tag;
    this.selectedCategory = undefined;
    this.selectedProject = undefined;
  }

  clearSelected() {
    this.selectedCategory = undefined;
    this.selectedTag = undefined;
    this.selectedProject = undefined;

    // let myTags = document.querySelectorAll('.hidden');
    // myTags.forEach((tag) => {
    //   tag.classList.remove('hidden');
    // });
  }
}
