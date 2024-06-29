import React from 'react'
import "../Components/PostJob.css"

const PostJob = () => {
    return (
        <>
            <div className='mainDiv'>
                <h1 className="header-Text">BountyX</h1>
                <p className='MainHeading'>Job Posting</p>
                <p className='subHeading'>I’m looking for a freelancer to complete a task for me.</p>
                <div className='PostJobContainer'>
                    <form>
                    <p className='jobtitle'>Job Title</p>
                    <input type='text' className='JobTitle' placeholder='Enter a job title'></input>
                    <p className='skills'>Skills Required</p>
                    <input type='text' className='Skills' placeholder='Enter Accurate Skills Required'></input>
                    <p className='jobdesc'>Job Description</p>
                    <input type='text' className='JobDesc' placeholder='Enter the Job Description'></input>
                    <p className='budget'>Budget</p>
                    <input type='text' className='Budget' placeholder='Enter your budget in your preferred Crypto Currency'></input>
                    <button className='JobSubmit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PostJob