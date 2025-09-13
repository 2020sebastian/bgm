<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BonusTracker - Never Miss Another Bank Bonus</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            padding: 30px 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .hero {
            padding: 80px 0;
            text-align: center;
            color: white;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            font-weight: 800;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .hero .subtitle {
            font-size: 1.5rem;
            margin-bottom: 10px;
            opacity: 0.95;
        }
        
        .value-prop {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            margin: 30px auto;
            max-width: 600px;
            font-size: 1.3rem;
            font-weight: 600;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        
        .cta-section {
            margin: 50px 0;
        }
        
        .email-form {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .email-input {
            padding: 18px 30px;
            font-size: 1.1rem;
            border: none;
            border-radius: 50px;
            width: 350px;
            max-width: 100%;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        
        .cta-button {
            padding: 18px 40px;
            font-size: 1.1rem;
            font-weight: 700;
            background: #fbbf24;
            color: #1a1a1a;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 40px rgba(251, 191, 36, 0.4);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 50px rgba(251, 191, 36, 0.5);
            background: #f59e0b;
        }
        
        .benefits {
            background: white;
            padding: 80px 0;
            margin-top: 100px;
            clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
        }
        
        .benefits h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: #1a1a1a;
        }
        
        .pain-points {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }
        
        .pain-point {
            background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s ease;
        }
        
        .pain-point:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        
        .pain-point h3 {
            color: #764ba2;
            margin-bottom: 10px;
            font-size: 1.3rem;
        }
        
        .pain-point p {
            color: #666;
            line-height: 1.6;
        }
        
        .stats {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-top: 40px;
        }
        
        .stat {
            padding: 20px;
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 10px;
        }
        
        .stat-label {
            font-size: 1.1rem;
            opacity: 0.9;
        }
        
        .waitlist-note {
            text-align: center;
            color: white;
            margin-top: 20px;
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero .subtitle {
                font-size: 1.2rem;
            }
            
            .email-input {
                width: 100%;
            }
            
            .pain-points {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav style="text-align: center; color: white; font-size: 1.5rem; font-weight: 700;">
                💰 BonusTracker
            </nav>
        </div>
    </header>
    
    <section class="hero">
        <div class="container">
            <h1>Stop Leaving Money on the Table</h1>
            <p class="subtitle">You're missing out on thousands in bank bonuses because you can't track all the requirements</p>
            
            <div class="value-prop">
                💸 Join thousands earning up to $10,000/year from checking account bonuses — automatically tracked, never missed
            </div>
            
            <div class="cta-section">
                <form class="email-form">
                    <input type="email" class="email-input" placeholder="Enter your email" required>
                    <button type="submit" class="cta-button">Join the Waitlist</button>
                </form>
                <p class="waitlist-note">Be the first to know when we launch. No spam, ever.</p>
            </div>
        </div>
    </section>
    
    <section class="benefits">
        <div class="container">
            <h2>Finally, a System That Works</h2>
            
            <div class="pain-points">
                <div class="pain-point">
                    <h3>📅 Never Miss a Deadline</h3>
                    <p>Automated reminders for direct deposits, minimum balances, and bonus qualification dates. We track it all so you don't have to.</p>
                </div>
                
                <div class="pain-point">
                    <h3>✅ Meet Every Requirement</h3>
                    <p>Clear dashboards showing exactly what you need to do and when. No more losing bonuses to fine print.</p>
                </div>
                
                <div class="pain-point">
                    <h3>💳 Manage Multiple Accounts</h3>
                    <p>Track 5, 10, or even 20+ accounts simultaneously. Our system handles the complexity while you collect the bonuses.</p>
                </div>
                
                <div class="pain-point">
                    <h3>🚫 Avoid All Fees</h3>
                    <p>Smart alerts before monthly fees hit. Know exactly when to close accounts to dodge closing fees.</p>
                </div>
                
                <div class="pain-point">
                    <h3>🎯 Pre-Qualified Opportunities</h3>
                    <p>See only the bonuses you're eligible for based on your history and location. No wasted applications.</p>
                </div>
                
                <div class="pain-point">
                    <h3>🔔 Real-Time Bonus Alerts</h3>
                    <p>Get notified instantly when new high-value bonuses drop. Be first in line for limited-time offers.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="stats">
        <div class="container">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px;">The Opportunity You're Missing</h2>
            
            <div class="stats-grid">
                <div class="stat">
                    <div class="stat-number">$10,000+</div>
                    <div class="stat-label">Annual earnings potential</div>
                </div>
                <div class="stat">
                    <div class="stat-number">400+</div>
                    <div class="stat-label">Active bank bonuses</div>
                </div>
                <div class="stat">
                    <div class="stat-number">87%</div>
                    <div class="stat-label">Miss bonuses due to tracking</div>
                </div>
                <div class="stat">
                    <div class="stat-number">2 hrs</div>
                    <div class="stat-label">Average time per bonus</div>
                </div>
            </div>
            
            <div class="cta-section" style="margin-top: 60px;">
                <form class="email-form">
                    <input type="email" class="email-input" placeholder="Enter your email" required>
                    <button type="submit" class="cta-button">Get Early Access</button>
                </form>
                <p class="waitlist-note" style="font-size: 1rem; margin-top: 30px;">
                    🎁 Early bird special: First 500 users get lifetime access at 50% off
                </p>
            </div>
        </div>
    </section>
    
    <script>
        // Handle form submissions
        document.querySelectorAll('.email-form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('.email-input').value;
                // Here you would normally send to your backend
                alert(`Thanks for joining! We'll notify ${email} when we launch.`);
                this.reset();
            });
        });
    </script>
</body>
</html>
