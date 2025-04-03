import './page.css';

export default function Home() {
  return (
    <>
      <div className="leaf-bg"></div>
      <div className="min-h-screen flex flex-col">
        {/* <!-- Header --> */}
        <header className="bg-[#f0f7ee] border-b border-[#c1d7ae] sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ff9a3c] to-[#ff6b6b] rounded-full flex items-center justify-center">
                <i className="fas fa-leaf text-white text-xs"></i>
              </div>
              <span className="text-[#5e7c61] font-bold text-xl">NinjaTweet</span>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-[#5e7c61] hover:text-[#ff9a3c] transition-colors"
              >
                <i className="fas fa-home mr-1"></i> Home
              </a>
              <a
                href="#"
                className="text-[#5e7c61] hover:text-[#ff9a3c] transition-colors"
              >
                <i className="fas fa-search mr-1"></i> Explore
              </a>
              <a
                href="#"
                className="text-[#5e7c61] hover:text-[#ff9a3c] transition-colors"
              >
                <i className="fas fa-bell mr-1"></i> Notifications
              </a>
              <a
                href="#"
                className="text-[#5e7c61] hover:text-[#ff9a3c] transition-colors"
              >
                <i className="fas fa-envelope mr-1"></i> Messages
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-[#ff9a3c] to-[#ff6b6b] text-white px-4 py-1 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Post
              </button>
              <div className="w-8 h-8 bg-[#5e7c61] rounded-full flex items-center justify-center text-white">
                N
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Main Content --> */}
        <main className="flex-grow container mx-auto px-4 py-6 flex">
          {/* <!-- Left Sidebar --> */}
          <aside className="hidden lg:block w-64 mr-8">
            <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-sm sticky top-24">
              <h3 className="text-[#5e7c61] font-bold mb-4 flex items-center">
                <i className="fas fa-fire mr-2 text-[#ff9a3c]"></i> Trending in
                Konoha
              </h3>
              <ul className="space-y-3">
                <li className="trending-item p-2 rounded-lg cursor-pointer">
                  <div className="text-xs text-[#7a9383]">Training Grounds</div>
                  <div className="font-medium text-[#5e7c61]">
                    #ShadowCloneJutsu
                  </div>
                  <div className="text-xs text-[#7a9383]">1.2K posts</div>
                </li>
                <li className="trending-item p-2 rounded-lg cursor-pointer">
                  <div className="text-xs text-[#7a9383]">Ichiraku Ramen</div>
                  <div className="font-medium text-[#5e7c61]">#MisoSpecial</div>
                  <div className="text-xs text-[#7a9383]">856 posts</div>
                </li>
                <li className="trending-item p-2 rounded-lg cursor-pointer">
                  <div className="text-xs text-[#7a9383]">Hokage's Office</div>
                  <div className="font-medium text-[#5e7c61]">#SasukeReturns</div>
                  <div className="text-xs text-[#7a9383]">3.5K posts</div>
                </li>
                <li className="trending-item p-2 rounded-lg cursor-pointer">
                  <div className="text-xs text-[#7a9383]">Chunin Exams</div>
                  <div className="font-medium text-[#5e7c61]">#Team7Reunion</div>
                  <div className="text-xs text-[#7a9383]">2.1K posts</div>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-[#5e7c61] font-bold mb-4 flex items-center">
                  <i className="fas fa-user-ninja mr-2 text-[#ff9a3c]"></i> Who to
                  Follow
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-[#7a9383] rounded-full flex items-center justify-center text-white">
                        S
                      </div>
                      <div>
                        <div className="font-medium text-[#5e7c61]">Sakura</div>
                        <div className="text-xs text-[#7a9383]">@pink_punch</div>
                      </div>
                    </div>
                    <button className="text-xs bg-[#c1d7ae] text-[#5e7c61] px-2 py-1 rounded-full hover:bg-[#a8c0a3] transition-colors">
                      Follow
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-[#5e7c61] rounded-full flex items-center justify-center text-white">
                        K
                      </div>
                      <div>
                        <div className="font-medium text-[#5e7c61]">Kakashi</div>
                        <div className="text-xs text-[#7a9383]">@copy_ninja</div>
                      </div>
                    </div>
                    <button className="text-xs bg-[#c1d7ae] text-[#5e7c61] px-2 py-1 rounded-full hover:bg-[#a8c0a3] transition-colors">
                      Follow
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-[#ff6b6b] rounded-full flex items-center justify-center text-white">
                        H
                      </div>
                      <div>
                        <div className="font-medium text-[#5e7c61]">Hinata</div>
                        <div className="text-xs text-[#7a9383]">
                          @byakugan_princess
                        </div>
                      </div>
                    </div>
                    <button className="text-xs bg-[#c1d7ae] text-[#5e7c61] px-2 py-1 rounded-full hover:bg-[#a8c0a3] transition-colors">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* <!-- Main Feed --> */}
          <div className="flex-grow max-w-2xl">
            {/* <!-- Post Composer --> */}
            <div className="post-card mb-6 p-4">
              <div className="flex space-x-3">
                <div className="avatar w-12 h-12 min-w-12 min-h-12 bg-gradient-to-br from-[#ff9a3c] to-[#ff6b6b] rounded-full flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div className="flex-grow">
                  <textarea
                    className="w-full bg-transparent border-b border-[#c1d7ae] pb-2 text-[#5e7c61] placeholder-[#a8c0a3] focus:outline-none focus:border-[#ff9a3c] transition-colors"
                    placeholder="What's happening, dattebayo?"
                  ></textarea>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-3 text-[#7a9383]">
                      <button className="action-btn">
                        <i className="far fa-image"></i>
                      </button>
                      <button className="action-btn">
                        <i className="fas fa-scroll"></i>
                      </button>
                      <button className="action-btn">
                        <i className="far fa-smile"></i>
                      </button>
                    </div>
                    <button className="bg-gradient-to-r from-[#ff9a3c] to-[#ff6b6b] text-white px-4 py-1 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Posts Feed --> */}
            <div className="space-y-4">
              {/* <!-- Post 1 --> */}
              <div className="post-card puff-animation p-5">
                <div className="flex space-x-3">
                  <div className="avatar w-12 h-12 min-w-12 min-h-12 bg-gradient-to-br from-[#ff9a3c] to-[#ff6b6b] rounded-full flex items-center justify-center text-white font-bold">
                    N
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#5e7c61]">
                          Naruto Uzumaki
                        </span>
                        <span className="text-[#7a9383] text-sm ml-2">@hokage</span>
                        <span className="text-[#7a9383] text-sm ml-2">· 2h</span>
                      </div>
                      <button className="text-[#7a9383] hover:text-[#ff9a3c]">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>
                    <div className="mt-1 text-[#5e7c61]">
                      Just challenged Sasuke to a ramen eating contest! He said
                      "Hn, pathetic" but I saw him sweating when I ordered my
                      15th bowl!
                      <span className="text-[#ff9a3c]">#BelieveIt</span>
                      <span className="text-[#ff6b6b]">#Team7</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center text-[#7a9383] text-sm">
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-comment"></i>
                        <span>42</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-retweet"></i>
                        <span>128</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-heart"></i>
                        <span>512</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Post 2 --> */}
              <div className="post-card puff-animation p-5">
                <div className="flex space-x-3">
                  <div className="avatar w-12 h-12 min-w-12 min-h-12 bg-[#5e7c61] rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#5e7c61]">
                          Sasuke Uchiha
                        </span>
                        <span className="text-[#7a9383] text-sm ml-2">
                          @last_uchiha
                        </span>
                        <span className="text-[#7a9383] text-sm ml-2">· 3h</span>
                      </div>
                      <button className="text-[#7a9383] hover:text-[#ff9a3c]">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>
                    <div className="mt-1 text-[#5e7c61]">
                      Naruto's idea of "training" is eating ramen until he can't
                      move. Disgraceful.
                      <span className="text-[#5e7c61]">#WasteOfTime</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center text-[#7a9383] text-sm">
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-comment"></i>
                        <span>28</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-retweet"></i>
                        <span>64</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-heart"></i>
                        <span>387</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Post 3 --> */}
              <div className="post-card puff-animation p-5">
                <div className="flex space-x-3">
                  <div className="avatar w-12 h-12 min-w-12 min-h-12 bg-gradient-to-br from-[#ff9a3c] to-[#ff6b6b] rounded-full flex items-center justify-center text-white font-bold">
                    N
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#5e7c61]">
                          Naruto Uzumaki
                        </span>
                        <span className="text-[#7a9383] text-sm ml-2">@hokage</span>
                        <span className="text-[#7a9383] text-sm ml-2">· 5h</span>
                      </div>
                      <button className="text-[#7a9383] hover:text-[#ff9a3c]">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>
                    <div className="mt-1 text-[#5e7c61]">
                      Remember when Sasuke pretended he didn't care about our
                      friendship but then risked his life to save me like a
                      million times? Good times.
                      <span className="text-[#ff9a3c]">#BestFriend</span>
                      <span className="text-[#5e7c61]">#EvenIfHeDeniesIt</span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full h-48 bg-gradient-to-br from-[#c1d7ae] to-[#a8c0a3] rounded-lg flex items-center justify-center text-white">
                        <i className="fas fa-image text-3xl opacity-50"></i>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between items-center text-[#7a9383] text-sm">
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-comment"></i>
                        <span>89</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-retweet"></i>
                        <span>215</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-heart"></i>
                        <span>1.2K</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Post 4 --> */}
              <div className="post-card puff-animation p-5">
                <div className="flex space-x-3">
                  <div className="avatar w-12 h-12 min-w-12 min-h-12 bg-[#7a9383] rounded-full flex items-center justify-center text-white font-bold">
                    K
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#5e7c61]">
                          Kakashi Hatake
                        </span>
                        <span className="text-[#7a9383] text-sm ml-2">
                          @copy_ninja
                        </span>
                        <span className="text-[#7a9383] text-sm ml-2">· 7h</span>
                      </div>
                      <button className="text-[#7a9383] hover:text-[#ff9a3c]">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>
                    <div className="mt-1 text-[#5e7c61]">
                      Watching Naruto and Sasuke argue is like reading the same
                      page of Icha Icha over and over. Entertaining but
                      ultimately going nowhere.
                      <span className="text-[#ff6b6b]">#Team7Dynamics</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center text-[#7a9383] text-sm">
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-comment"></i>
                        <span>76</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-retweet"></i>
                        <span>198</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-heart"></i>
                        <span>843</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Post 5 --> */}
              <div className="post-card puff-animation p-5">
                <div className="flex space-x-3">
                  <div className="avatar w-12 h-12 min-w-12 min-h-12 bg-gradient-to-br from-[#ff9a3c] to-[#ff6b6b] rounded-full flex items-center justify-center text-white font-bold">
                    N
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#5e7c61]">
                          Naruto Uzumaki
                        </span>
                        <span className="text-[#7a9383] text-sm ml-2">@hokage</span>
                        <span className="text-[#7a9383] text-sm ml-2">· 9h</span>
                      </div>
                      <button className="text-[#7a9383] hover:text-[#ff9a3c]">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>
                    <div className="mt-1 text-[#5e7c61]">
                      Sasuke said he's "too busy" to hang out today. Pretty sure
                      I saw him just standing dramatically on a roof staring
                      into the distance. Classic.
                    </div>
                    <div className="mt-2">
                      <div className="flex space-x-2">
                        <div className="w-1/2 h-32 bg-gradient-to-br from-[#ff9a3c] to-[#ff6b6b] rounded-lg flex items-center justify-center text-white">
                          <i className="fas fa-image text-xl opacity-50"></i>
                        </div>
                        <div className="w-1/2 h-32 bg-gradient-to-br from-[#5e7c61] to-[#7a9383] rounded-lg flex items-center justify-center text-white">
                          <i className="fas fa-image text-xl opacity-50"></i>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between items-center text-[#7a9383] text-sm">
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-comment"></i>
                        <span>63</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-retweet"></i>
                        <span>142</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="far fa-heart"></i>
                        <span>721</span>
                      </button>
                      <button className="action-btn flex items-center space-x-1">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Sidebar --> */}
          <aside className="hidden xl:block w-80 ml-8">
            <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-sm sticky top-24">
              <h3 className="text-[#5e7c61] font-bold mb-4 flex items-center">
                <i className="fas fa-shield-alt mr-2 text-[#ff9a3c]"></i> Konoha
                News
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-[#f0f7ee] rounded-lg">
                  <div className="text-sm font-medium text-[#5e7c61]">
                    Ichiraku Ramen introduces new "Hokage Special"
                  </div>
                  <div className="text-xs text-[#7a9383] mt-1">
                    Double miso broth with extra chashu, just how the Seventh
                    Hokage likes it
                  </div>
                </div>
                <div className="p-3 bg-[#f0f7ee] rounded-lg">
                  <div className="text-sm font-medium text-[#5e7c61]">
                    Annual Chunin Exams begin next week
                  </div>
                  <div className="text-xs text-[#7a9383] mt-1">
                    Team leaders encouraged to register their genin by tomorrow
                  </div>
                </div>
                <div className="p-3 bg-[#f0f7ee] rounded-lg">
                  <div className="text-sm font-medium text-[#5e7c61]">
                    Uchiha District reconstruction complete
                  </div>
                  <div className="text-xs text-[#7a9383] mt-1">
                    Sasuke Uchiha reportedly visited the memorial site yesterday
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-[#5e7c61] font-bold mb-4 flex items-center">
                  <i className="fas fa-hand-peace mr-2 text-[#ff9a3c]"></i> Naruto
                  Emojis
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="w-12 h-12 bg-[#ff9a3c]/20 rounded-full flex items-center justify-center text-[#ff9a3c] text-xl cursor-pointer hover:bg-[#ff9a3c]/30 transition-all">
                    <i className="fas fa-fist-raised"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#ff6b6b]/25 rounded-full flex items-center justify-center text-[#ff6b6b] text-xl cursor-pointer hover:bg-[#ff6b6b]/30 transition-all">
                    <i className="fas fa-angry"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#5e7c61]/25 rounded-full flex items-center justify-center text-[#5e7c61] text-xl cursor-pointer hover:bg-[#5e7c61]/30 transition-all">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#7a9383]/25 rounded-full flex items-center justify-center text-[#7a9383] text-xl cursor-pointer hover:bg-[#7a9383]/30 transition-all">
                    <i className="fas fa-scroll"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#ff9a3c]/25 rounded-full flex items-center justify-center text-[#ff9a3c] text-xl cursor-pointer hover:bg-[#ff9a3c]/30 transition-all">
                    <i className="fas fa-ramen-loaded"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#ff6b6b]/25 rounded-full flex items-center justify-center text-[#ff6b6b] text-xl cursor-pointer hover:bg-[#ff6b6b]/30 transition-all">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#5e7c61]/25 rounded-full flex items-center justify-center text-[#5e7c61] text-xl cursor-pointer hover:bg-[#5e7c61]/30 transition-all">
                    <i className="fas fa-hand-sparkles"></i>
                  </div>
                  <div className="w-12 h-12 bg-[#7a9383]/25 rounded-full flex items-center justify-center text-[#7a9383] text-xl cursor-pointer hover:bg-[#7a9383]/30 transition-all">
                    <i className="fas fa-mask"></i>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
