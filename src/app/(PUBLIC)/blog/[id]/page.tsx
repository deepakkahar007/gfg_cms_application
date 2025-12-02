const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* MAIN */}
      <main className="flex flex-1 justify-center py-10 px-4 sm:px-6">
        <div className="flex flex-col w-full max-w-4xl">
          {/* ============ ARTICLE HEADER ============ */}
          <article>
            <div className="px-4 text-center">
              <p className="text-primary font-semibold text-sm mb-4">
                TECHNOLOGY & DESIGN
              </p>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                The Future of Artificial Intelligence in Modern Design
              </h1>

              {/* Author */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhkdz8547c4sNxGN_JsrIaKzZkmQHX4NYJo6-BOfhXKxA0Pn2JvCdoRD5qsmXcMTi9_NUDjKSVmkW9GPEPa7z9xeDYqQGkKQ7-AijOk-LFv6mf60dHe7zYsxV3WlhDwXjFJtVi8Tl81iInJClhs813yorqZV8b5wuQhC-GPLqkENmljUXhO06kO-MfFnvL-2PjgqUQDyXYbPD_jeTm7oCeqbk0Jk0z_yQRwivi_vppU6_pnP3ah2RbGTDLA9a9aIErUxkFZGlfk1wT")',
                  }}
                ></div>

                <div>
                  <p className="text-white text-base font-semibold">Jane Doe</p>
                  <p className="text-gray-400 text-sm">
                    Published on Oct 26, 2023 · 7 min read
                  </p>
                </div>
              </div>
            </div>

            {/* ============ HERO IMAGE ============ */}
            <div className="w-full my-10">
              <div
                className="w-full min-h-[24rem] rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASTh-uz8ssb9PWyP705X2GiFfQJ3q4aszeh16ukqsggOzU3rIzdFHBa4_vrC9BRtg_O7XXd2YCe9XhEyDcwfPwcwDh8izXqDJlEncNTKJkdRIYT9xNuYhJdF8_cvswh4ShZbV1hKSVHDuqsxr3_ZvD6ZnJJqQjYkLSRdeV3VQc3aw1ab1OB7oq7bVw4VdUXSnsG6D-ct1zWZw-L6Kf6HhKb_IjAOlTywwftW3kzMnXi_3tNQBpz-pYL1D0MsZzA0PyzkKxCZXCnkvc")',
                }}
              ></div>
            </div>

            {/* ============ SOCIAL BAR ============ */}
            <div className="sticky top-24 z-10 flex justify-center mb-8">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-background-dark/80 backdrop-blur-sm p-2">
                {/* Like */}
                <button className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    favorite_border
                  </span>
                  <span className="text-sm font-medium">1.2k</span>
                </button>

                <div className="h-6 w-px bg-white/10"></div>

                {/* Share */}
                <button className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    ios_share
                  </span>
                  <span className="text-sm font-medium">Share</span>
                </button>

                <div className="h-6 w-px bg-white/10"></div>

                {/* Save */}
                <button className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    bookmark_border
                  </span>
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </div>

            {/* ============ ARTICLE CONTENT ============ */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 mx-auto px-4">
              <p>
                Artificial intelligence is no longer the stuff of science
                fiction; it's a transformative force reshaping industries, and
                the world of design is no exception...
              </p>

              <h2>The Rise of AI as a Creative Partner</h2>
              <p>For decades, design tools have been passive instruments...</p>

              <blockquote>
                <p>
                  "AI will not replace designers. However, designers who use AI
                  will replace those who don't..."
                </p>
              </blockquote>

              <h2>Intelligent Interfaces and Personalization</h2>
              <p>
                Beyond asset creation, AI is revolutionizing user experience...
              </p>

              <figure>
                <img
                  className="rounded-lg"
                  alt="Abstract neural network"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzbP9j--9yuwnNCkweHQF3KIXBcRAY7_W4dgxk9HRbhOq8qKZQN0LJE4ug1V8xJV2Ag9rEND0AA3voHb6f76CNTJemDQOpxKnq16Gd7p8SZV6vzx3KHp8gzXgKZQCbqtpYUqFxnYkXIcVC_72tuku__AHz_3mbfOT30RDUYhFpbn5kenujHSGl7aMaf7ttg5WP6y-5ql34IWeU44jzbjtDw1XvGo8wxKrRZYG_BYuGMsJuVlqGN_ZRpxdeRYizmANCqbLVsVClfJw9"
                />
                <figcaption className="text-gray-400">
                  AI-powered algorithms can create personalized UX.
                </figcaption>
              </figure>

              <h2>Ethical Considerations and the Path Forward</h2>
              <p>As with any powerful technology, the integration of AI...</p>
            </div>
          </article>

          {/* Divider */}
          <div className="my-12 h-px bg-white/10"></div>

          {/* ============ COMMENTS SECTION ============ */}
          <section className="px-4">
            <h2 className="text-2xl font-bold text-white mb-6">Comments (3)</h2>

            <div className="space-y-6">
              {/* NEW COMMENT */}
              <div className="flex items-start gap-4">
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeUw777yugNEEKNTbhg1SGfO7qEc-_J36XPhL1uVMw_upx8uUKeVljU0OqDwdGhUUayA4-eTQKNy7r6aJmFjoKmkLDQp2JLWDZl1mxXTpTeDhLuCfxlpbyMApa3OK_sJDmlEldtIThbm3HIdrtKTwGMWZPTaABshrVsJ-43jxtfQ3ByzGO8eA2JGK03xVcIGlRz-j8yup3vd9zMSLI0AGIt1HiAeSY3E6Vx5IxZPY7uqT9PcYRtCRp6zfYg0mrGGBXItN65fUxgI-f")',
                  }}
                ></div>

                <div className="flex-1">
                  <textarea
                    className="w-full rounded-lg bg-white/5 border-white/20 text-gray-300 focus:ring-primary focus:border-primary placeholder-gray-500"
                    rows={3}
                    placeholder="Add a comment..."
                  ></textarea>

                  <button className="mt-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* COMMENT 1 */}
              <div className="flex items-start gap-4">
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBRDBKyahVetxF4id_V8N0ZO_L-Y6HGaDNmTNRhzNsC8-3HMnfoag465cRVoL5UwiPVUbEmw2qFYipxC1yYlr7B7LRpfF7bQzt297WjCEEZ0AbCsPu1S-bPt5e7T4Ts-W8tiNpNog0dCLF8cZ0cY423nowIkf0XR7ZXojuQZlXQKi47wiB-JgLLeXWXiPaXHvPSQQQoS6-xb4wbqL-6oUy9Fi5bW-N6l1WIlGzDcQl8iT2fnfs6DNjY8nAY8VCl2ZA1UwJwsnnKFWW")',
                  }}
                ></div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <p className="text-white font-semibold">Alex Johnson</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>

                  <p className="text-gray-300 mt-1">
                    Great perspective! AI as a creative partner is key...
                  </p>
                </div>
              </div>

              {/* COMMENT 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDujElULiWPfXSQdKBZwmVIn_hEwUmjJ8FW03thUxfH7SSwm0ULZh0BxUKxo3l1GPiqdZgVDZFM4w1J91QuAZkeFSxyeIW-x5cvcEs8dYo7YAgddflu7UcDtjxWt197cwDoYfDwbHvu0RY1d5ZWvTqa2JV2AT6A1PV3FFjDuDNUnx68eHOHGq6C2JqV62vlDKsI-u6k86F6bLVRpYV4uExE9zSauV00ZoKDOlvH3XOp7McnItlqI3rmV_ESwXRFf6KIjoWnGoQfhdjV")',
                  }}
                ></div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <p className="text-white font-semibold">Maria Garcia</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>

                  <p className="text-gray-300 mt-1">
                    The section on ethical considerations is so important...
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
