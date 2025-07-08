import AnimatedSection from './AnimatedSection';

interface AboutSectionProps {
  language: 'en' | 'zh';
}

export default function AboutSection({ language }: AboutSectionProps) {
  return (
    <section id="about" className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white text-gray-800 lg:min-h-screen flex flex-col justify-center pb-16 md:pb-0">
      <div 
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full filter blur-3xl"
      ></div>
      <AnimatedSection>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-12 text-center leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
            {language === 'en' ? 'About Me' : '关于我'}
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">{language === 'en' ? 'Who I Am' : '我是谁'}</h3>
              <p className="text-base leading-relaxed font-light">
                {language === 'en'
                  ? `Hi, I'm Jirapat Kantaros. I graduated from Chiang Mai University, Faculty of Mass Communication.
                  I'm a friendly person who enjoys being around people and working as part of a team. I get along well with others, and I always make sure to deliver work on time. I'm also dedicated and committed to doing my best in everything I do.`
                  : `你好，我是 Jirapat Kantaros，毕业于清迈大学传播学院。
我是一个开朗、乐于与人相处的人，喜欢团队合作。
我和他人相处融洽，总是按时完成任务。
我也非常有责任心，并且在每一件事上都尽自己最大努力。`}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">{language === 'en' ? 'What I Can Do' : '我的能力'}</h3>
              <div className="text-base leading-relaxed font-light">
                <p className="mb-4">
                  {language === 'en'
                    ? `I have experience working with real clients, both during my internship and in ongoing freelance work. I can plan and manage full campaigns, create content ideas, and handle social media from start to finish. I've created videos, designed visuals, and written briefs for different platforms like Facebook, TikTok, Shopee, and YouTube.`
                    : `我有与真实客户合作的经验，包括实习期间和自由职业项目中。
我可以独立规划并管理完整的营销项目，提出创意、制作内容，并负责社交媒体的运营。
我曾制作视频、设计视觉图像，并撰写适用于 Facebook、TikTok、Shopee 和 YouTube`}
                </p>
                <p className="font-semibold text-center mt-6 mb-2">{language === 'en' ? 'Here are some tools I use:' : '我常用的工具：'}</p>
                <ul className="list-none space-y-1">
                  <li><b>{language === 'en' ? 'Design & Editing:' : '设计与编辑：'}</b> Lightroom, Photoshop, DaVinci Resolve, Canva</li>
                  <li><b>{language === 'en' ? 'AI Tools:' : 'AI 工具：'}</b> ChatGPT, Claude, Gemini</li>
                  <li><b>{language === 'en' ? 'Office Tools:' : '办公工具：'}</b> Microsoft Word, Excel, PowerPoint</li>
                </ul>
                <p className="mt-4">
                  {language === 'en'
                    ? `I'm also confident in project coordination, teamwork, and communicating ideas clearly.`
                    : `我也擅长项目协调、团队合作，并能清晰地表达想法。`}
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">{language === 'en' ? `What I'm Looking For` : '我的期望'}</h3>
              <p className="text-base leading-relaxed font-light">
                {language === 'en'
                  ? `I'm looking for opportunities to grow in marketing and creative work.
                  I want to join a team where I can learn more, support brand goals, and bring real value through content and communication.`
                  : `我正在寻找一个能让我在市场营销和创意工作中成长的机会。
我希望加入一个能持续学习、支持品牌目标，并通过内容和沟通创造实际价值的团队。`}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
} 