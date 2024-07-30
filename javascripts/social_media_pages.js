const ctx = document.getElementById('followersChart').getContext('2d');
        const data = {
            labels: ['Instagram', 'Twitter(X)', 'YouTube', 'Facebook', 'TikTok'],
            datasets: [{
                data: [40, 5, 3, 7, 12],
                backgroundColor: ['rgb(255, 85, 113)', 'black', 'red', 'blue', 'rgb(255, 255, 255)'],
                borderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
                borderWidth: 1
            }]
        };

        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw} followers`;
                            }
                        }
                    }
                }
            }
        };

        const followersChart = new Chart(ctx, config);