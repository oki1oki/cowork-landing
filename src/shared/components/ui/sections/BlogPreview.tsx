import { blogData } from "../../../constants";
import { BlogCard } from "../BlogCard";
import { Container } from "../Container";

export const BlogPreview = () => (
  <section className="my-[72px] md:my-12">
    <Container className="text-black flex flex-col items-center">
      <div className="text-center max-w-[768px] m-auto">
        <p className="subtitle text-primary">COWORK CHRONICLES</p>
        <h2 className="title mt-4 mb-6">
          Insights, Innovation, and Inspiration
        </h2>
        <p className="paragraph">
          Stay updated on the latest trends in coworking, productivity tips, and
          success stories that define the Cowork experience.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 md:gap-8 md:grid-cols-1 mt-12 mb-16 md:mb-8">
        {blogData.map((item, i) => (
          <BlogCard key={i} {...item} />
        ))}
      </div>
      <button className="bg-primary py-3 px-6 text-white rounded-full font-semibold btn-animate">
        View All
      </button>
    </Container>
  </section>
);
