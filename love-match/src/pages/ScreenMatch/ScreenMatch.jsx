import { CardProfile } from "../../components/CardProfile/CardProfile"
import { useRequestData } from "../../hooks/useRequestData"

const ScreenMatch = () => {
    const profileMatches = useRequestData(undefined, 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/person')

    console.log(profileMatches)

    return (
        <div>
            <CardProfile 
                name={profileMatches.name}
                bio={profileMatches.bio}
                age={profileMatches.age}
            />
        </div>
    )
}

export default ScreenMatch