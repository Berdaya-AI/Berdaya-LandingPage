"use client"

import StylingButton from "@/components/styling-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { budget, weHelp } from "@/data";
import Link from "next/link";
import React, { useState } from "react";

const Book = () => {

  interface FormData {
    firstName: string;
    lastName: string;
    companyName: string;
    jobTitle: string;
    email: string;
    budget: string;
    help: string[];
    projectDetail: string;
    terms: boolean;
  }

  type FormErrors = Partial<Record<keyof FormData, string>>;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    budget: "",
    help: [],
    projectDetail: "",
    terms: false,
  });

  const [termsChecked, setTermsChecked] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLButtonElement>) => {
    const { value, checked } = e.target as HTMLInputElement;
    setFormData((prevFormData) => {
      const newHelp = checked
        ? [...prevFormData.help, value]
        : prevFormData.help.filter((item) => item !== value);
      return { ...prevFormData, help: newHelp };
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, budget: target.value });
  };

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
    setFormData((prevFormData) => ({
      ...prevFormData,
      terms: !termsChecked,
    }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.companyName) newErrors.companyName = 'Company Name is required';
    if (!formData.jobTitle) newErrors.jobTitle = 'Job Title is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!formData.budget) newErrors.budget = 'Budget is required';
    if (formData.help.length === 0) newErrors.help = 'Please select at least one option';
    if (!formData.projectDetail) newErrors.projectDetail = 'Project Detail is required';
    if (!formData.terms) newErrors.terms = 'Please agree to the terms';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('/api/book', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          console.error("Failed to submit form:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <main className="flex min-h-screen py-12 flex-col place-content-center bg-black-100 text-white">
      <section className="max-w-full w-full">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:grid-rows-none gap-4">
            <div className="flex flex-col gap-4 border-2 border-[#424242] rounded-2xl p-8 text-white/80">
              <h1 className="font-bold text-2xl md:text-[32px]">
                Let&apos;s scale together
              </h1>
              <p className="pb-2 text-base md:text-xl font-medium">
                Unlock your business potential with AI-Powered growth.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4 ">
                    <Input
                      className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                      placeholder="First Name*"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                    />

                    <Input
                      className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                      placeholder="Last Name*"
                      name="lastName"
                      onChange={handleChange}
                      value={formData.lastName}
                    />
                    {errors.firstName && <p className="text-red-500 font-semibold tracking-wide text-xs">{errors.firstName}</p>}
                    {errors.lastName && <p className="text-red-500 font-semibold tracking-wide text-xs">{errors.lastName}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                      placeholder="Company Name*"
                      name="companyName"
                      onChange={handleChange}
                      value={formData.companyName}
                    />
                    <Input
                      className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                      placeholder="Job Title*"
                      onChange={handleChange}
                      name="jobTitle"
                      value={formData.jobTitle}
                    />
                    {errors.companyName && <p className="text-red-500 font-semibold tracking-wide text-xs">{errors.companyName}</p>}
                    {errors.jobTitle && <p className="text-red-500 font-semibold tracking-wide text-xs">{errors.jobTitle}</p>}
                  </div>

                  <Input
                    className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                    placeholder="Work Email*"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && <p className="text-red-500 font-semibold tracking-wide text-xs">{errors.email}</p>}
                </div>
                <RadioGroup defaultValue="option-one" className="py-2 gap-y-2">
                  <div className="grid grid-cols-4 ">
                    <p className="text-sm md:text-lg ">Project Budget </p>
                    {errors.budget && <p className="flex text-red-500 font-semibold tracking-wide text-xs text-start items-center">{errors.budget}</p>}
                  </div>
                  {budget.map((budgets) => (
                    <div key={budgets.id} className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="border-[#424242]"
                        value={budgets.content}
                        id={budgets.content}
                        name="budget"
                        checked={formData.budget === budgets.content}
                        onClick={handleRadioChange}
                      />
                      <Label
                        htmlFor={budgets.content}
                        className="text-[0.75rem] md:text-[15px]"
                      >
                        {budgets.content}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex flex-col gap-y-2 pb-2">
                  <p className="text-sm md:text-lg">
                    What can we help with? Select all that apply*
                  </p>
                  {errors.help && <p className="text-red-500 font-semibold tracking-wide text-xs">{errors.help}</p>}
                  {weHelp.map((helps) => (
                    <div
                      key={helps.id}
                      className="flex items-start md:items-center space-x-2"
                    >
                      <Checkbox
                        id={helps.content}
                        className="border-[#424242]"
                        name="help"
                        value={helps.content}
                        checked={formData.help.includes(helps.content)}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor={helps.content}
                        className="text-[0.75rem] md:text-[15px] font-medium text-wrap"
                      >
                        {helps.content}
                      </label>
                    </div>
                  ))}

                </div>
                <Textarea
                  className="h-28 text-xs md:text-sm bg-black-100 border-[#424242] placeholder:text-[#979797] mb-2"
                  placeholder="Please describe your project in detail (detail type, volume, timeline, budget, etc.)*"
                  value={formData.projectDetail}
                  name="projectDetail"
                  onChange={handleChange}
                />
                {errors.projectDetail && <p className="text-red-500 font-semibold tracking-wide text-xs py-2 ">{errors.projectDetail}</p>}
                <StylingButton
                  className="rounded-xl text-white bg-gradient-to-r from-[#00674F] to-[#000000] hover:saturate-200 mb-4"
                  iconClassName="my-auto h-4"
                  title="Submit"
                  disabled={!termsChecked}
                />
              </form>
              <div className="flex space-x-4 ">
                <Checkbox id="terms" className="border-[#424242]"
                  checked={termsChecked}
                  onChange={handleTermsChange}
                />
                <label
                  htmlFor="terms"
                  className="text-[0.75rem] md:text-[15px] font-medium text-wrap leading-5"
                >
                  I agree to receive communications from Berdaya, and I
                  understand Berdaya will process my personal information in
                  accordance with Berdaya&apos;s Privacy Policy.*
                </label>
              </div>
              {errors.terms && <p className="text-red-500 font-semibold tracking-wide text-xs">{errors.terms}</p>}
            </div>
            <div className="flex flex-col gap-4 border-2 border-[#424242] rounded-2xl p-8">
              <div className="flex h-[35%] justify-center">
                <img src="/shape_2.png" alt="Shape" />
              </div>
              <Link className="flex items-center gap-2" href="/">
                <span className="font-bold text-lg md:text-2xl">
                  BERDAYA.ai
                </span>
              </Link>
              <p className="pb-8 text-base md:text-xl">
                &quot;We helping visionary businesses transform innovatively,
                integrate seamlessly, while maintain reliable
                infrastructure.&quot;
              </p>
              <div className="flex flex-col pb-4 text-base md:text-xl">
                <p>
                  Fadl Lul Hakim Ihsan{" "}
                  <span className="text-[5px] md:text-[10px] text-white/55">
                    (McCombs School of Business, UTA)
                  </span>
                </p>
                <p className="text-xs md:text-base text-white/55">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;
