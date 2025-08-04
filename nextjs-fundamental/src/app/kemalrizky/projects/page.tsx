import styles from '../kemalrizky.module.css'
import ProjectCard from '../_components/ProjectCard';

export default function KemalRizky() {
    return(
        <div className={styles.page}>
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
            title="Waterbox"
            description="IoT device for water monitoring"
            href="https://github.com/kemalrizky/waterbox-dev"
            keywords={["Arduino", "C++", "IoT"]}
            />
            <ProjectCard
            title="Broiler Mass Prediction"
            description="ML model to calculate broiler average mass from video footage"
            href="https://github.com/kemalrizky/broiler-mass-predict"
            keywords={["Python", "Tensorflow", "Data Science"]}
            />
            <ProjectCard
            title="Pendulum Period Detection"
            description="Program to detect pendulum period from an image data using OpenCV"
            href="https://github.com/kemalrizky/pendulum_period_detection"
            keywords={["OpenCV", "Python", "Physical Modelling"]}
            />
            <ProjectCard
            title="Coupled Ball Simulation"
            description="Program for simulating movement of coupled balls based on physical constrains"
            href="https://github.com/kemalrizky/coupled_ball"
            keywords={["Python", "Physical Modelling"]}
            />
          </div>
        </div>
    );  
} 