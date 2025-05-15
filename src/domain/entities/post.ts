export type BlogPost = {
    id: number;
    title: string;
    description: string;
    published_at: string;
    url: string;
    slug: string;
    cover_image: string | null;
    tag_list: string[];
}
