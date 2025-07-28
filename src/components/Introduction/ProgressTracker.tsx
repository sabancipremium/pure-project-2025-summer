'use client'

import { useState, useEffect } from 'react'

interface LearningModule {
  id: string
  title: string
  description: string
  status: 'locked' | 'available' | 'in-progress' | 'completed'
  estimatedTime: number
  prerequisites: string[]
  concepts: string[]
  practicalSkills: string[]
}

interface UserProgress {
  completedModules: string[]
  currentModule: string | null
  timeSpent: Record<string, number>
  conceptsMastered: string[]
  startedAt: Date
  lastActivity: Date
}

const learningModules: LearningModule[] = [
  {
    id: 'fundamentals',
    title: 'Fundamental Equations',
    description: 'Master the basic mathematical relationships in magnetostriction',
    status: 'available',
    estimatedTime: 15,
    prerequisites: [],
    concepts: ['Strain tensor', 'Magnetization', 'Linear relationships', 'Material constants'],
    practicalSkills: ['Equation manipulation', 'Unit analysis', 'Parameter identification']
  },
  {
    id: 'domains',
    title: 'Magnetic Domains',
    description: 'Understand domain structure and magnetization processes',
    status: 'available',
    estimatedTime: 20,
    prerequisites: ['fundamentals'],
    concepts: ['Domain walls', 'Magnetization reversal', 'Domain rotation', 'Saturation'],
    practicalSkills: ['Domain visualization', 'Hysteresis interpretation', 'Field analysis']
  },
  {
    id: 'tensors',
    title: 'Tensor Mathematics',
    description: 'Learn tensor notation and Voigt matrix representation',
    status: 'locked',
    estimatedTime: 25,
    prerequisites: ['fundamentals'],
    concepts: ['Tensor rank', 'Voigt notation', 'Index mapping', 'Symmetry operations'],
    practicalSkills: ['Tensor manipulation', 'Matrix conversion', 'Index notation']
  },
  {
    id: 'symmetry',
    title: 'Crystal Symmetry',
    description: 'Explore how crystal structure simplifies magnetostriction',
    status: 'locked',
    estimatedTime: 30,
    prerequisites: ['tensors'],
    concepts: ['Point groups', 'Crystal systems', 'Symmetry operations', 'Reduced matrices'],
    practicalSkills: ['Symmetry analysis', 'Material classification', 'Constant reduction']
  },
  {
    id: 'interactive',
    title: 'Interactive Simulation',
    description: 'Apply knowledge with real-time magnetostriction simulation',
    status: 'locked',
    estimatedTime: 35,
    prerequisites: ['domains', 'symmetry'],
    concepts: ['Field response', 'Temperature effects', 'Hysteresis', 'Real-time analysis'],
    practicalSkills: ['Parameter control', 'Data interpretation', 'Experimental design']
  },
  {
    id: 'applications',
    title: 'Engineering Applications',
    description: 'Connect theory to real-world magnetostrictive devices',
    status: 'locked',
    estimatedTime: 40,
    prerequisites: ['interactive'],
    concepts: ['Actuator design', 'Sensor principles', 'Material selection', 'Performance optimization'],
    practicalSkills: ['Device modeling', 'Performance calculation', 'Design optimization']
  }
]

const ProgressBar = ({ completed, total, label }: { 
  completed: number; 
  total: number; 
  label: string 
}) => {
  const percentage = (completed / total) * 100

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{label}</span>
        <span>{completed}/{total} ({percentage.toFixed(0)}%)</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

const ModuleCard = ({ 
  module, 
  progress, 
  onStart, 
  onContinue 
}: { 
  module: LearningModule
  progress: UserProgress
  onStart: (moduleId: string) => void
  onContinue: (moduleId: string) => void
}) => {
  const isCompleted = progress.completedModules.includes(module.id)
  const isInProgress = progress.currentModule === module.id
  const isLocked = module.status === 'locked'
  const canStart = module.prerequisites.every(prereq => 
    progress.completedModules.includes(prereq)
  ) && !isLocked

  const getStatusIcon = () => {
    if (isCompleted) return <span className="text-2xl">✅</span>
    if (isInProgress) return <span className="text-2xl">▶️</span>
    if (isLocked || !canStart) return <span className="text-2xl">🔒</span>
    return <span className="text-2xl">⏰</span>
  }

  const getStatusColor = () => {
    if (isCompleted) return 'border-green-200 bg-green-50'
    if (isInProgress) return 'border-blue-200 bg-blue-50'
    if (isLocked || !canStart) return 'border-gray-200 bg-gray-50'
    return 'border-orange-200 bg-orange-50'
  }

  const timeSpent = progress.timeSpent[module.id] || 0

  return (
    <div className={`p-6 rounded-lg border ${getStatusColor()} transition-all duration-200`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <div>
            <h3 className="font-semibold text-gray-900">{module.title}</h3>
            <p className="text-sm text-gray-600">{module.description}</p>
          </div>
        </div>
        <div className="text-right text-sm text-gray-500">
          <div>~{module.estimatedTime} min</div>
          {timeSpent > 0 && (
            <div className="text-blue-600 font-medium">
              {timeSpent} min spent
            </div>
          )}
        </div>
      </div>

      {/* Prerequisites */}
      {module.prerequisites.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Prerequisites:</h4>
          <div className="flex flex-wrap gap-2">
            {module.prerequisites.map(prereq => {
              const isPrereqCompleted = progress.completedModules.includes(prereq)
              const prereqModule = learningModules.find(m => m.id === prereq)
              return (
                <span 
                  key={prereq}
                  className={`px-2 py-1 rounded text-xs ${
                    isPrereqCompleted 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {prereqModule?.title || prereq}
                </span>
              )
            })}
          </div>
        </div>
      )}

      {/* Concepts to learn */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Concepts:</h4>
        <div className="flex flex-wrap gap-2">
          {module.concepts.map(concept => {
            const isMastered = progress.conceptsMastered.includes(concept)
            return (
              <span 
                key={concept}
                className={`px-2 py-1 rounded text-xs ${
                  isMastered 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {concept}
              </span>
            )
          })}
        </div>
      </div>

      {/* Action button */}
      <div className="flex justify-end">
        {isCompleted ? (
          <button
            onClick={() => onContinue(module.id)}
            className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors"
          >
            Review
          </button>
        ) : isInProgress ? (
          <button
            onClick={() => onContinue(module.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        ) : canStart ? (
          <button
            onClick={() => onStart(module.id)}
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
          >
            Start
          </button>
        ) : (
          <button
            disabled
            className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
          >
            Locked
          </button>
        )}
      </div>
    </div>
  )
}

const LearningPath = ({ progress }: { progress: UserProgress }) => {
  const pathSteps = [
    { id: 'fundamentals', name: 'Fundamentals', description: 'Basic equations' },
    { id: 'domains', name: 'Domains', description: 'Magnetic structure' },
    { id: 'tensors', name: 'Tensors', description: 'Mathematical tools' },
    { id: 'symmetry', name: 'Symmetry', description: 'Crystal effects' },
    { id: 'interactive', name: 'Simulation', description: 'Hands-on practice' },
    { id: 'applications', name: 'Applications', description: 'Real-world use' }
  ]

  const getStepStatus = (stepId: string) => {
    if (progress.completedModules.includes(stepId)) return 'completed'
    if (progress.currentModule === stepId) return 'current'
    return 'future'
  }

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        🗺️ Learning Path
      </h3>
      
      <div className="flex flex-col gap-4">
        {pathSteps.map((step, index) => {
          const status = getStepStatus(step.id)
          const isLast = index === pathSteps.length - 1
          
          return (
            <div key={step.id} className="flex items-center gap-4">
              {/* Step indicator */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                status === 'completed' 
                  ? 'bg-green-500 text-white' 
                  : status === 'current'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {status === 'completed' ? '✓' : index + 1}
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <div className="font-medium text-gray-900">{step.name}</div>
                <div className="text-sm text-gray-600">{step.description}</div>
              </div>
              
              {/* Connecting line */}
              {!isLast && (
                <div className="absolute left-[64px] w-0.5 h-8 bg-gray-200 mt-10" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const AchievementBadges = ({ progress }: { progress: UserProgress }) => {
  const achievements = [
    {
      id: 'first-steps',
      name: 'First Steps',
      description: 'Complete your first module',
      icon: '🎯',
      unlocked: progress.completedModules.length >= 1
    },
    {
      id: 'equation-master',
      name: 'Equation Master',
      description: 'Master fundamental equations',
      icon: '🧮',
      unlocked: progress.completedModules.includes('fundamentals')
    },
    {
      id: 'domain-expert',
      name: 'Domain Expert',
      description: 'Understand magnetic domains',
      icon: '🧲',
      unlocked: progress.completedModules.includes('domains')
    },
    {
      id: 'tensor-wizard',
      name: 'Tensor Wizard',
      description: 'Master tensor mathematics',
      icon: '🔢',
      unlocked: progress.completedModules.includes('tensors')
    },
    {
      id: 'symmetry-scholar',
      name: 'Symmetry Scholar',
      description: 'Understand crystal symmetry',
      icon: '💎',
      unlocked: progress.completedModules.includes('symmetry')
    },
    {
      id: 'simulation-pro',
      name: 'Simulation Pro',
      description: 'Complete interactive simulations',
      icon: '🎮',
      unlocked: progress.completedModules.includes('interactive')
    },
    {
      id: 'engineer',
      name: 'Magnetostriction Engineer',
      description: 'Complete all modules',
      icon: '🏆',
      unlocked: progress.completedModules.length === learningModules.length
    }
  ]

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        🏅 Achievements
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {achievements.map(achievement => (
          <div 
            key={achievement.id}
            className={`p-4 rounded-lg border text-center transition-all duration-200 ${
              achievement.unlocked 
                ? 'bg-yellow-50 border-yellow-200 shadow-sm' 
                : 'bg-gray-50 border-gray-200 opacity-50'
            }`}
          >
            <div className={`text-2xl mb-2 ${achievement.unlocked ? '' : 'grayscale'}`}>
              {achievement.icon}
            </div>
            <div className={`font-medium text-sm ${
              achievement.unlocked ? 'text-yellow-800' : 'text-gray-600'
            }`}>
              {achievement.name}
            </div>
            <div className={`text-xs mt-1 ${
              achievement.unlocked ? 'text-yellow-700' : 'text-gray-500'
            }`}>
              {achievement.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ProgressTracker = () => {
  const [progress, setProgress] = useState<UserProgress>({
    completedModules: [],
    currentModule: null,
    timeSpent: {},
    conceptsMastered: [],
    startedAt: new Date('2025-01-01'), // Fixed date for SSR consistency
    lastActivity: new Date('2025-01-01') // Fixed date for SSR consistency
  })

  const handleStartModule = (moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      currentModule: moduleId,
      lastActivity: new Date() // This is fine since it's triggered by user interaction
    }))
  }

  const handleContinueModule = (moduleId: string) => {
    // Simulate module interaction
    setProgress(prev => ({
      ...prev,
      currentModule: moduleId,
      lastActivity: new Date() // This is fine since it's triggered by user interaction
    }))
  }

  // Simulate some initial progress for demo
  useEffect(() => {
    // You could load this from localStorage or an API
    setProgress(prev => ({
      ...prev,
      completedModules: ['fundamentals'],
      currentModule: 'domains',
      timeSpent: { 'fundamentals': 18, 'domains': 7 },
      conceptsMastered: ['Strain tensor', 'Magnetization', 'Linear relationships']
    }))
  }, [])

  const totalModules = learningModules.length
  const completedCount = progress.completedModules.length
  const totalConcepts = learningModules.flatMap(m => m.concepts).length
  const masteredCount = progress.conceptsMastered.length
  const totalTime = Object.values(progress.timeSpent).reduce((sum, time) => sum + time, 0)

  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-gothic">
          📊 Learning Progress Tracker
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Track your magnetostriction mastery journey. Complete modules, earn achievements, 
          and build expertise step by step.
        </p>
      </div>

      {/* Overall progress summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-4 font-gothic">
          🎯 Overall Progress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded border">
            <ProgressBar 
              completed={completedCount} 
              total={totalModules} 
              label="Modules Completed" 
            />
            <div className="text-2xl font-bold text-blue-600">
              {completedCount}/{totalModules}
            </div>
          </div>
          <div className="bg-white p-4 rounded border">
            <ProgressBar 
              completed={masteredCount} 
              total={totalConcepts} 
              label="Concepts Mastered" 
            />
            <div className="text-2xl font-bold text-green-600">
              {masteredCount}/{totalConcepts}
            </div>
          </div>
          <div className="bg-white p-4 rounded border">
            <div className="text-sm text-gray-600 mb-2">Time Invested</div>
            <div className="text-2xl font-bold text-purple-600">
              {totalTime} min
            </div>
          </div>
        </div>
      </div>

      {/* Learning path and achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LearningPath progress={progress} />
        <AchievementBadges progress={progress} />
      </div>

      {/* Module cards */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 font-gothic">
          📚 Learning Modules
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {learningModules.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              progress={progress}
              onStart={handleStartModule}
              onContinue={handleContinueModule}
            />
          ))}
        </div>
      </div>

      {/* Study tips */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          💡 Study Tips for Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Effective Learning:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">📖</span>
                <span>Review fundamentals before advancing to complex topics</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500">🔄</span>
                <span>Practice with interactive simulations regularly</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">✏️</span>
                <span>Take notes on key equations and concepts</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500">🎯</span>
                <span>Focus on understanding rather than memorization</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Time Management:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-red-500">⏰</span>
                <span>Dedicate 15-20 minutes per session for best retention</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">📅</span>
                <span>Study consistently rather than in long sessions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500">🎮</span>
                <span>Use interactive tools to reinforce learning</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">🔄</span>
                <span>Revisit completed modules to strengthen understanding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgressTracker
