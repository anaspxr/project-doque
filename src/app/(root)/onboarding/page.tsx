"use client";

import React, { useState } from "react";
import Onboarding from "@/components/ui/onboarding/onboarding";
import SpaceNameStep from "@/components/ui/onboarding/spaceNameStep";
import BoardNameStep from "@/components/ui/onboarding/boardNameStep";
import TaskNameStep from "@/components/ui/onboarding/taskNamesStep";
import ReadyPage from "@/components/ui/onboarding/readyPage";

export default function Page() {
  const [step, setStep] = useState(0); // Manage the current step
  const [spaceName, setSpaceName] = useState(""); // State to hold the space name
  const [boardName, setBoardName] = useState(""); // State to hold the current board name

  // Move task categories state to the parent component
  const [taskCategories, setTaskCategories] = useState({
    todo: "ToDo",
    doing: "Doing",
    completed: "Completed",
  });

  const handleContinue = () => {
    setStep(1); // Move to Space Name Step
  };

  const handleSpaceNameNext = (name: string) => {
    setSpaceName(name); // Set the space name when provided
    setStep(2); // Move to Board Name Step
  };

  const handleBoardNameNext = (name: string) => {
    setBoardName(name); // Set the board name when provided
    setStep(3); // Move to Task Name Step
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1); // Go back to the previous step
  };

  const handleTaskNameNext = () => {
    setStep(4); // Move to Ready Page
  };

  // Update task categories when inputs change
  const handleTaskCategoryChange = (name: string, value: string) => {
    setTaskCategories((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {step === 0 && <Onboarding onContinue={handleContinue} />}
      {step === 1 && (
        <SpaceNameStep
          onNext={handleSpaceNameNext}
          initialName={spaceName} // Pass initial space name
        />
      )}
      {step === 2 && (
        <BoardNameStep
          previousName={spaceName}
          onNext={handleBoardNameNext}
          onBack={handleBack}
          initialName={boardName} // Pass initial board name
        />
      )}
      {step === 3 && (
        <TaskNameStep
          previousSpaceName={spaceName}
          previousBoardName={boardName}
          onBack={handleBack}
          taskCategories={taskCategories} // Pass task categories
          onTaskCategoryChange={handleTaskCategoryChange} // Pass handler for category changes
          onNext={handleTaskNameNext}
        />
      )}
      {step === 4 && <ReadyPage />}
    </div>
  );
}
