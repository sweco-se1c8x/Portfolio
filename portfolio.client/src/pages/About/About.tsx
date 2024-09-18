import { IoCheckmarkOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import profilePicture from "../../assets/images/AyhamDarwish.png";
import { useTranslation } from "react-i18next";
import skillService from "../../services/skillService";
import { useEffect, useState } from "react";
import { Skill } from "../../interface/skills";
import authStatus from "../../components/authStatus";
import { FaTrashAlt } from "react-icons/fa";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import { MdWorkOutline } from "react-icons/md";

const About: React.FC = () => {
  const { t } = useTranslation();
  const { isSignedIn } = authStatus();
  const [skills, setSkills] = useState<Skill[]>();
  const [newSkillName, setNewSkillName] = useState('');
  const [skillError, setSkillError] = useState('');

  const handleRemoveSkill = async(id: number | undefined) => {
    const success = await skillService.deleteSkill(id as number);
  if (success) {
    setSkills(prevSkills => prevSkills?.filter(skill => skill.id !== id));
  } else {
    console.error("Failed to delete the skill");
  }
  };

  const handleSkillNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillError("")
    setNewSkillName(e.target.value);
  };

  const handleAddSkill = async () => {
    const newSkill: Skill = {
      skillName: newSkillName
    };
    try {
      await skillService.addSkill(newSkill);
      setSkills(prevSkills => [...(prevSkills || []), newSkill]);
    } catch (error) {
      setSkillError(t("skill_exist"));
    }

    setNewSkillName('');
  };

  useEffect(() => {
    const getSkills = async () => {
      const allSkills = await skillService.getAllSkills();
      setSkills(allSkills);
    };
    getSkills();
  }, []);

  return (
    <>
      <section id="about" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row item-center">
            <div className="md:w-1/2 lg:w-1/3">
              <img
                src={profilePicture}
                alt="Ayham Darwish"
                className="rounded-full shadow-lg mb-8 md:mb-0"
              />
            </div>
            <div className="md:w-1/2 lg:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("about")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed">{t("about_text")}</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">{t("skills")}</h3>
              <ul className="mt-4 space-y-2">
                {skills?.map((skill) => (
                  <li key={skill.id}>
                    <div className="flex items-center">
                      <IoCheckmarkOutline className="mr-2 h-5 w-5 text-primary" />
                      <span className="flex items-center">
                        {skill.skillName}
                        {isSignedIn && (
                          <div className="pl-2">
                            <FaTrashAlt className="text-red-500 cursor-pointer"
                              onClick={() => handleRemoveSkill(skill.id)}
                            />

                          </div>
                        )}
                      </span>
                    </div>
                  </li>
                ))}
                {isSignedIn && <span className="text-red-500">{skillError}</span>}
                {isSignedIn && (
                  <div className="flex justify-between">
                    <Input
                      className="!w-1/2"
                      type="text"
                      name="skill"
                      onChange={handleSkillNameChange}
                      placeholder={t("skills")}
                      value={newSkillName}
                      required
                    />
                    <Button className="bg-primary" onClick={handleAddSkill}>{t("add_skill")}</Button>
                  </div>
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{t("experience")}</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <div className="flex items-center">
                    <LuCalendarDays className="mr-2 h-5 w-5 text-primary" />
                    <span>{t("about_view.experience_year")}</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <MdWorkOutline className="mr-2 h-5 w-5 text-primary" />
                    <span>{t("about_view.Sweco")}</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <MdWorkOutline className="mr-2 h-5 w-5 text-primary" />
                    <span>{t("about_view.epical")}</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <MdWorkOutline className="mr-2 h-5 w-5 text-primary" />
                    <span>{t("about_view.devize")}</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <LuGraduationCap className="mr-2 h-5 w-5 text-primary" />
                    <span>{t("about_view.degree")}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
