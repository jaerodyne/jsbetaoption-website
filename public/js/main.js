// Initialize chart in html doc
var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontFamily ='Permanent Marker';
Chart.defaults.global.defaultFontStyle = 'bold';
Chart.defaults.global.defaultFontSize = 20;

var progress = document.getElementById('animationProgress');
var moods = ["Straight Up Rock", "Rock", "Laid-Back Chill", "Groove", "Phasered Out Rock", "Latin-like Dance Rock?", "Raw Rock", "Acoustic Rock Journey", "Needs More Drums", "Lonely Guitar Intro", "Reggae-Influenced Shuffle Rock", "Rock Punk Rock", "Finale"];

//Chart
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["Track 1: Watch Out Boys", "Track 2: No Regrets", "Track 3: Superstar", "Track 4: There's Nobody Singing", "Track 5: A Secret to Tell", "Track 6: No Chance", "Track 7: It's Over", "Track 8: Take It Away", "Track 9: Sweet Release", "Track 10: You Can't Save Me", "Track 11: Out to Sea", "Track 12: Insomnia", "Track 13: Never Forget"],
		datasets: [{
			backgroundColor: 'rgba(36,36,36,1)',
			borderColor: [
				'rgba(255,99,132,1)',
				'rgba(36,36,36,1)'
			],
			borderWidth: 3,
			data: [150, 104, 102, 95, 162, 106, 120, 114, 172, 114, 138, 108, 145],
			fill: false,
	    pointRadius: 5,
	    pointBorderWidth: 2,
	    pointHoverBorderColor: 'rgba(36,36,36,0.8)',
	    pointHoverRadius: 5
		}]
	},
	options: {
		animation: {
      duration: 1500,
      onProgress: function(animation) {
        progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
      },
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
		      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily, Chart.defaults.global.defaultFontColor);
		      ctx.textAlign = 'center';
		      ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];                            
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        });
      }
    },
    hover: {
      animationDuration: 0
    },
		layout: {
			padding: {
				left: 5,
				right: 15,
				top: 0,
				bottom: 15
			}
		},
		legend: {
      display: false
    },
		scales: {
			xAxes: [{
				gridLines: {
				  display:false,
				  drawBorder: false
				},
				scaleLabel: {
          display: true,
          fontSize: '18',
          fontStyle: 'bold',
          labelString: 'Beats Per Minute'
        },
        ticks: {
        	display: false
        }
			}],
			yAxes: [{
				gridLines: {
					display: false,
					drawBorder: false
				},
				ticks: {
						beginAtZero: false,
						display: false
				}
			}]
		},
		title: {
      display: true,
      fontColor: 'rgba(36,36,36,0.8)',
      fontSize: 24,
      text: 'Highs and Lows as told by tempo markings.'
    },
    tooltips: {
      backgroundColor: 'rgba(216,237,255,0.8)',
      bodyFontColor: 'rgba(36,36,36,0.8)',
      callbacks: {
		    label: function(tooltipItem, data) {
		    	let musicNote = '\u2669'
	        let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
	          return musicNote + '= ' + value;
	      },
        footer: function(tooltipItems, data) {
				 return 'Mood: ' + moods[tooltipItems[0].index];
      	}
      },
      caretPadding: 10,
      caretSize: 7,
      custom: function(tooltip) {
        if (!tooltip) return;
        // disable displaying the color box;
        tooltip.displayColors = false;
      },
      footerFontColor: 'rgba(36,36,36,0.8)',
      footerFontStyle: 'bold',
      titleFontColor: 'rgba(255,99,132,1)',
      yAlign: 'top'
    }
	}
});
