const CategoriesPage = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 px-40 py-5 w-full justify-center">
      {/* Top section */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Explore Topics
          </p>
          <p className="text-gray-400 text-base leading-normal">
            Find articles and resources on the topics that interest you most.
          </p>
        </div>
      </div>

      {/* Search + View Toggle */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3">
        {/* Search Input */}
        <div className="md:col-span-2">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-400 flex items-center justify-center pl-4 rounded-l-lg bg-gray-800/50">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                placeholder="Search for a category..."
                className="form-input w-full flex-1 rounded-lg text-white focus:ring-2 focus:ring-primary/50 bg-gray-800/50 placeholder:text-gray-400 px-4 rounded-l-none"
              />
            </div>
          </label>
        </div>

        {/* Grid / List Toggle */}
        <div className="flex">
          <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-gray-800/50 p-1">
            <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-gray-400 text-sm font-medium has-[:checked]:bg-background-dark has-[:checked]:text-white">
              Grid View
              <input
                type="radio"
                name="view-toggle"
                defaultChecked
                className="invisible w-0"
              />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-gray-400 text-sm font-medium has-[:checked]:bg-background-dark has-[:checked]:text-white">
              List View
              <input
                type="radio"
                name="view-toggle"
                className="invisible w-0"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
        {/* Category Card Reusable Pattern */}
        {[
          {
            title: "Technology",
            posts: "12 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ67SorTsJdGRlotFm_s1Y5Sh_acz0C7DBySYH8kDONKR3hYJm-6XEsADf8othBoipXrpBY7-qAWx17xuk3OJAACyQkG7deYaA3rNF6lK9PSuP4mJ65dsVSnT0jUY-cXzUxqqV8fNdamzh3oJNPbEq5UPiuNhkj-BKkSL65AQqJ-zHuYstr1GeMrpJNL3cJZGDpRNAg_lEJHy8b7rsM2HupufzhW-qhtSrtS-hQhIEUd0xLfa0rOlqelyjhk6CqjGjpsEitPhV9OQ0",
          },
          {
            title: "Design",
            posts: "8 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6BJFzNNMycfoQloJwihEb191KmA0HHnwlV8nB2rWTT8Sy9X1fMm-Q0LZvJJ-hZ3EhIOAuvD9YbFGJfOAOtKS38lB3NswwccoS3Tk56YKX37NMh_CKp5uQOcdTze2kcyFj6QPyDesTwDP8A4SY7RfMksf6QgBuDp52ESFgoEwmkvwUj2pdalTbJVlQU3oZzODRCLUf2ihqPx5PVHuAva0Eax9yNqKsMLj2ZVTzvwsraP7W9osqbAo9HH73LBmaRgQpRLXq_x9Dqf-6",
          },
          {
            title: "Productivity",
            posts: "15 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqd0bXwe9qryXO2oEh5kVr20Xhc9w2OUbSRAId14sdhAR0m-ndEmySrsZtX-dSMuqoyleFZ6RpxFNykxwiSJj7tocO9QuvuoOwcPz16Hreenk1H_N57cAnc9QXPIURILdtkapJsnDdos1rq2R9oHK35cvGs7PDhS7qWi_S2aSKK5O0abWIzV2XtaSOqrqubRScir2WUAE7vrk70IK3BGnxU6cd5KtTkzcVra2LkZ_wdi3wBZRTCiSvs_T5RPsqvgixzcCv78jB69k0",
          },
          {
            title: "Software Engineering",
            posts: "21 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtvwrp3S2qcczvYguItzZ1smNGgR540MIJIr9_iNA6bGKT2TDCEx4Ipcm8dBPQNNbwMfWNa8ZV3dfAhjId-wXZTyf1g1AFmHaKwcByBmBoJbRHIpgspO7z_A-Khf-xgavPQW6kaTudPixpNNmWWTNPi6c50U1hx7y1dA6JkJDM6gR9-WRQKhODYP3Bo5Q2gZEk0X1baA2gR6t7Z3Un8iX836yhpsiDSKFAjPGwVCWfOXT-90Jqy9FDXHyeuSYCOSSZeIRr0dKsjqtX",
          },
          {
            title: "Marketing",
            posts: "9 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVJ5O2WfpYS8lszO_fDRYdpf7bLgpG0kLrtNz0MQEaZfCe_TE2h0NzQsDoNF6zZt-G1cARHjne6kuI3tG7IJPnJJk9qYSyLS1VnNhx5dylOmXuOGLFvD2Tt72HX-y2vulXygaGHAQaylwMKZmKxU6lB7DeJLHdckP6BJI3dlBFDlZ8jhKNd3aDi4UjwbbrQSnJHFLd_X1y8uvYcJiNoWGtDkGCqMBqCOWTaKrZlA7hHtfNV-uY1xVWqm_Lm5PFH-lospfgK_O1ecCm",
          },
          {
            title: "Lifestyle",
            posts: "5 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwcWTTzo1kYUYJz_fbfARjuDgTe31GSTnaXYnha0WEFbpPktZ7IUcGADIGLS3uj6BTA3jS8-k2hlmDuIIdhf0CyOHJx7KFnmISk3UQ03WQro1aW_BG0iSNXQplf6Lel9DxBppvONhJOxgB_A9ZNEXgHV-1HLmJ887OEx_2IXDzzZINF_KC8PgAVm4rPKqw6aO1ILqTjzkCc2xP5CHJF5qkd8B5WrZkWoBw6M5afHC9tCI-QPpqYzMp8E4IeG87jX6opvQzmSEIesyJ",
          },
          {
            title: "Finance",
            posts: "11 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0OzDMb9kRvf6nOz5uWzwt6-XOtRJMTjrbm4Y2-8MLtxDgpG_0PEnj2sUwh_TlcbZ15MrrQETszHTPgps0K6KfC4OJBLwpiVyNa5NHJ2cwd3OnsElbP0Mq3MxHrlj_AfxS2WNydgsXrljfH-c46qKgaTegVLf3MeuhPraH0AeTq5idMEP69ya3iPU_Q2UoI1LQVAOfzHLCUI05JQ_v6EuaSAy_QS5btNZKVKixDdeW6Rqe6SBc0jAy5C-4PMoGbzZUsaswYZe-R5m",
          },
          {
            title: "Health & Wellness",
            posts: "14 Posts",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Xhp-9VY65wfF1Yxne4BZj5mIjWzWt89hvGr-WUbLOmTn0aJLomPX1YNxt8k0NsQUOo9nuaQn_inkcWbL-fn6Ns5VikdFrrdV9BEkiW1cUKTSAqEcGPXPD-I_JicPme3X9DiIaEB344kPovpycQHoW_LOh0KGV4N5yQiYg0kv5uIPMvvrKRrDz98cvuCX5RKTCRdl-pfTFo-lIWM8VzAUFY_aIHruit-P5eYvxCwjzTAXEQR_VvD5GDIA-3-cxK0faWT3jNfMVTwZ",
          },
        ].map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 pb-3 group cursor-pointer"
          >
            <div
              className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${cat.img})` }}
            ></div>

            <div className="transition-colors group-hover:text-primary">
              <p className="text-white text-base font-medium group-hover:text-primary">
                {cat.title}
              </p>
              <p className="text-gray-400 text-sm">{cat.posts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
