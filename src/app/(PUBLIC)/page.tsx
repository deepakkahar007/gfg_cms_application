import RecentPostCard from "@/components/RecentPostCard";
import TrendCard from "@/components/TrendCard";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark">
      {/* ===================== MAIN ===================== */}
      <main className="grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* ========== HERO SECTION ========== */}
          <section className="mb-12 md:mb-16">
            <div
              className="bg-cover bg-center flex flex-col justify-end rounded-xl pt-48"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWk_Sfj0dxajgjBuX2l6iv4qh6cL5Z8xfD9v53RksYdeC8-noYH1DK6lce929QDUpjlK67Sc1jZpRf6HE5e6Fw6WqUiP3O2fNNglmLBxVkVq9rLsL-47zSlI6HczU1ZUCfEYd8jYt0T4ASFZdMj5Ga4U__g8Qyfo6N5YjjjeYMAuj1M7OyigirvGkLIMhN0WYdx6YiE6PVpeN8zrMmf63BI2HAquPuXhGurJUru8o-2pUR0mTYftXX3XBcgUIZXVbntm5tT0IfGc_a")`,
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between p-6 md:p-8 gap-4">
                <div className="max-w-2xl flex flex-col gap-2">
                  <p className="text-primary text-sm font-bold uppercase">
                    Technology
                  </p>

                  <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight">
                    The Future of Minimalist Design in a Digital World
                  </h1>

                  <p className="text-neutral-300 text-base font-medium">
                    By Alex Johnson • Published on Oct 26, 2023
                  </p>
                </div>

                <button className="rounded-lg h-12 px-6 bg-primary text-white font-bold hover:bg-primary/90">
                  Read More
                </button>
              </div>
            </div>
          </section>

          {/* ========== TRENDING NOW ========== */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-white text-2xl md:text-3xl font-bold px-4 pb-4 pt-5">
              Trending Now
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {/* MAP-LIKE STRUCTURE BUT STATIC — CARD 1 */}
              {[
                {
                  category: "Productivity",
                  title:
                    "Mastering Productivity: 5 Essential Tools for Creatives",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeC4EzFvd7XCfjdNN5GVDfPD-0iY1kU1XpKpSrGJFjQt1rHjixtJ5xxCqQk9QnC5lQiBaI1dKs6UyuFpdH7firAPLl8Cuza_tf4iIxXJeoJQ_AczaXOKSc4aAHIWj15StFuBILN5KlCxHSuiJRiUYfygRLtLEMTu1U7QSmnqr-tnKWNcsxvrAlYhVoEKhEB_jDLj0nWl1ZtE1ASODHtkA8NVYeWXlCYcTpTN0BAsKS1Cbo6KC3jpMz5lfh6JzjRnI5XxOA5WWt3nb8",
                },
                {
                  category: "Tech",
                  title: "The Rise of Artisan Keyboards in Tech Culture",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK_-hvqdh1AYvId9XdWlfF-ynTP5OMTXgCn-ec5t3XCZaM8zK94dIhIxm-BKhIKa2JFbG-dc-CPhPC7MT-Ot3JSAKgVd0EjMJj6wgryIhwx_K2eOU0XA7JGfFPK7PWShLeT1rUr5YHvoJFJuKB4eu52wk1Z8OlPQ4zD9x2_sfkJB1uOjtaaY2ofudcZ9Zk_brkMj3xmSAT7CtuX8d5mbzdTJaXXFeDkGeUufedtkeDSbE5FjlfNDKPGbh6etYJxkflcp2V6vwpmTiP",
                },
                {
                  category: "Design",
                  title:
                    "Lessons in Timeless Design: What We Can Learn From the Past",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYl8kzJke7aWwqIV219qRCwYajiHBNhszurNEdnnq9VllXsYSTSCX2AXxyvyval5vkvnKxWXtbviae3E-EK0AAaSPDNtMjNjFUylMIlKxO1y3LKa0ImY217YY7og0cNja6-u8kq3RRncju5CaJz8mQIv8jilEP8JoMC7zvhZCJpcJeFuMKcVbBmRMF8ZZVEhRDlE90FBf2I2Z1qqIypupfXqPkEBijZBq-_csCN_DXv_mvJ9UkhWyRzverGLLhfAaWwzExE743GHsY",
                },
                {
                  category: "Design",
                  title:
                    "Lessons in Timeless Design: What We Can Learn From the Past",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYl8kzJke7aWwqIV219qRCwYajiHBNhszurNEdnnq9VllXsYSTSCX2AXxyvyval5vkvnKxWXtbviae3E-EK0AAaSPDNtMjNjFUylMIlKxO1y3LKa0ImY217YY7og0cNja6-u8kq3RRncju5CaJz8mQIv8jilEP8JoMC7zvhZCJpcJeFuMKcVbBmRMF8ZZVEhRDlE90FBf2I2Z1qqIypupfXqPkEBijZBq-_csCN_DXv_mvJ9UkhWyRzverGLLhfAaWwzExE743GHsY",
                },
              ].map((item, i) => (
                <TrendCard
                  key={i}
                  title={item.title}
                  category={item.category}
                  image_url={item.img}
                />
              ))}
            </div>
          </section>

          {/* ========== RECENT POSTS (ALL 8 CARDS) ========== */}
          <section>
            <h2 className="text-white text-2xl md:text-3xl font-bold px-4 pb-4 pt-5">
              Recent Posts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
              {/* LOOP: Static Data Included */}
              {[
                {
                  cat: "Development",
                  title: "A Deep Dive into Modern CSS Frameworks",
                  by: "Jane Doe",
                  date: "Oct 25, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_JtFYzenUJw6KIl5zg1q3Y3etVD51YdL2R-tz3UIud0LpWPZt6zJwFANZVuSlVcuP8XT_JEp5SHWr4SHwN4-oYpc_f9efjNTnasrwXfiAIq3rGuQ9x6GwxyX-Pi-zqIeYlb2ByFD2A1dbCQ-qk54g2BsW8LKjLw8y505aFP1oZ4JQHk6R0CjVLnAr-d6JJaVd7sfCLwYosdDkGWBJvXJt1p0GqMDxR-xAQuZB54ZEyhptrUOOgsaQFnASohtkhaA_2G8wmI1rWt6C",
                },
                {
                  cat: "Travel",
                  title: "Finding Stillness: A Guide to Mindful Travel",
                  by: "John Smith",
                  date: "Oct 24, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpDc8A23QSYOqJ2lyeCRzltgMZZYjGWFnDJsy2kOU9P90RqUSTBAu4SizPmAupmZWBF2xGyS70PEzij5WpSfPp8h_ffyYBcnSSiawpx-pzi3_Flrs9X9VcIzDqEpi8wv_p2eEkUGNyjAqyLkrqV20TFpITKKEtg_q1MEidm0dWQpbCF_y4nwIxUWnjHQyOIWFk5A4dMfDqEPX6WMW8rr_-1bp7Kv2OIMQwt0LDFsDnC18zERyo6eqIv5LdxChOOUZmGdGQ8JfMVa8A",
                },
                {
                  cat: "Food",
                  title: "The Art of Simple Cooking: 30-Minute Meals",
                  by: "Emily White",
                  date: "Oct 23, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHNgj3lt5Fdi92DB7AIUIiGlvfrfZzrh1iGdTGxxchLvAGVbXznCzs67OQWUziaf8f1rghZFcVvDV8fgxw2-By0Dmkk67HsZuEyUkxPd_2Ca_YdohnhYpqfWp2Z3jdqj7eouXsUve09Ri_yzBm0e-rWxeAc8hyIwd7bxfkk1LLBBh2PKOKkCAZHTNyzlwn7y1QQA0khvxzfP2ZBOnVQ4e4UYqqCaH9nCuleGm9zde5OWIFvCfSlO4bLrNU-cMtsygKLHj4mtt-rLz1",
                },
                {
                  cat: "Lifestyle",
                  title: "How to Build a Reading Habit That Sticks",
                  by: "Mark Brown",
                  date: "Oct 22, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7LZ1Mq__tQt9JYrOni8ikAsclQUDF5W1WuhfNJCBqxlvhZZnRwr0Q_btMe37hJXWS1fuAd0POKjyEN0DDmk5DuTpYrOBthEhQFFCXA6dSVlY_0Kq9YwLHGwQwQ9lGokCS7lgA2XxS8CAZlRtEwob5RYLTdi49cIhwbgP2u-ndPml_2b6BoDPPfSXdpDIAt7fphkNLyTKrJiboyb2H_E_7dKHlbvZrB7IRH79Prqc_-snRvTiK94IBSNvyaziolZLLZVMRGpPHJ94n",
                },
                {
                  cat: "Photography",
                  title: "Exploring the Charm of Analog Photography",
                  by: "Sarah Green",
                  date: "Oct 21, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo6hoPiuUSSZLzS5dD24DwUb_TtC348zJV49xJ0TupU-b4414W61asMEjyVn9iZsv6bV8EyJpha7rNgphmQwQ1_9q--P9h_uGPoJz3JG1C70_yCg-aoZFwT4oHWAEdsCVxw6wrNnWQq6C-nwYnYCvhwdK09tq2JgftI75I2obltrtFeCp7Q0Hx79xtiWT5_X1lRoPVNTS6qkCqsInxretAIeohOGwCdPFtiIkZEAH-vNT1SRnsr9a5peSv-ZCwnJ6jsd1dev_gNwbD",
                },
                {
                  cat: "Business",
                  title: "Effective Team Collaboration in a Remote World",
                  by: "David Chen",
                  date: "Oct 20, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZbIpNjyr1fm_fFcuVQQBgJuP5XsKUTM5p_fIQMkyTxwSVISS2Zs7O4ofoSbGgjSV1QHybBTGluYK2vRhcX3fRIOJxu0ivYYyOE4Dgey49s0ohbTulpkuH-BJ2_UqH5065fGTXZuF06INeUl0_XA98KmAflMT4cnEyqvtesR-NK0mhvzX0LupWJ28wEgwxlensjcmF3pLSlEOmB-Bf5UKlxftruoR_Vgd2ItkDo_mjbNoYJoI5BmGGjMPkX4aS0qv3WlDfUrUACkI",
                },
                {
                  cat: "Design",
                  title: "The Principles of User-Centric UI Design",
                  by: "Olivia Martinez",
                  date: "Oct 19, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBgarPG7_6Sbn4IHy1ZqTnuJYG3TPRGA1rVAhTb-tKE5t8BL9t0KLj8v2nnLaoMmIcnZ_uQ4juvJi37Um7SQCZYi4VWqi4eCH85Riqoh-94BnHU8g1PabSwHro20nM8N1ZwDvIBzRfMSz5a8hawuWg15o_-xfnZ5Nwf9Oj6BdzEf8l-iYwR31lRcvQ6Qj2i36aNak1jIPKBMVEfbPg5_713oAIq4_EBDSDnYqj_z_SiF38BYDrZ-wzzzLfZOBkliEenjYLn9dsJIya",
                },
                {
                  cat: "Wellness",
                  title: "5 Simple Mindfulness Exercises for a Calmer Day",
                  by: "Kevin Lee",
                  date: "Oct 18, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS6gxWNukKAKtATz_3_aW3GHw75sp0nxR7GfAKZVoiYWkEPuN6JiNjc7IHnV90mITI0QzOehVFmm9e8szKG2NPd0YyIQiAcSWIUZeW7i_M0wLuvo0Nx-Utga7JTv6HGYa770u_AN0x3V11aJIh-_pdBnimkho_lFlYY80oLbIITX6FmmTkm7FPoECIbUVYOFc5Qr-es6i1ORzy2JtIuF3i4QRR3w4zZpB06yf89xezAnwwVUyWkEqFsEE9t4Wy2xSDQu5RkVzjvJcU",
                },
              ].map((post, idx) => (
                <RecentPostCard
                  key={idx}
                  title={post.title}
                  author={post.by}
                  category={post.cat}
                  date={post.date}
                  image_url={post.img}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
